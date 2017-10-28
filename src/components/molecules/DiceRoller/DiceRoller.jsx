import { map, get, times, includes, without } from 'lodash';
import React, { Component } from 'react';
import styled from 'styled-components';

import { Caption } from '../../atoms/Typography';
import { NumberInput, RangeInput } from '../../atoms/Input';
import { StyledRadiogroup } from '../../atoms/Radiogroup';
import Button from '../../atoms/Button';
import Roll from '../../../services/dice';

const DiceRollerWrapper = styled.div``;
export default class DiceRoller extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      dice: 1,
      target: 7,
      autosuccesses: 0,
      double: [10],
      reroll: [],
      stunt: 0,
      rollHistory: [],
    };
  }

  rollDice = () => {
    const roller = new Roll({
      ...this.state,
      double: new Set(this.state.double),
      reroll: new Set(this.state.reroll),
    });
    const roll = roller.roll();
    this.setState({ rollHistory: [roll, ...this.state.rollHistory] });
  };

  handleChange = field => (e) => {
    const value = get(e, 'target.value', e);
    const payload = {};
    switch (field) {
      case 'autosuccesses':
      case 'target':
      case 'dice':
        payload[field] = Number(value);
        break;
      case 'stunt':
        payload[field] = Number(value) === this.state.stunt ? 0 : Number(value);
        break;
      case 'double':
      case 'reroll':
        payload[field] = includes(this.state[field], Number(value))
          ? without(this.state[field], Number(value))
          : [...this.state[field], Number(value)];
        break;
      default:
        payload[field] = value;
        break;
    }
    this.setState(payload);
  };

  renderRollHistory = () =>
    map(this.state.rollHistory, ({ roll, successes }) => (
      <div>
        {JSON.stringify(roll)} for {successes} successes
      </div>
    ));

  render() {
    return (
      <DiceRollerWrapper>
        <Caption>number of dice</Caption>
        <NumberInput value={this.state.dice} onChange={this.handleChange('dice')} />
        <NumberInput
          value={this.state.autosuccesses}
          onChange={this.handleChange('autosuccesses')}
        />
        <RangeInput
          min="1"
          max="10"
          value={this.state.target}
          onChange={this.handleChange('target')}
        />
        <Caption>Double</Caption>
        <StyledRadiogroup
          items={times(10, i => ({
            label: i + 1,
            value: i + 1,
            checked: includes(this.state.double, i + 1),
          }))}
          onClick={this.handleChange('double')}
        />
        <Caption>Reroll</Caption>
        <StyledRadiogroup
          items={times(10, i => ({
            label: i + 1,
            value: i + 1,
            checked: includes(this.state.reroll, i + 1),
          }))}
          onClick={this.handleChange('reroll')}
        />
        <Caption>Stunt</Caption>
        <StyledRadiogroup
          items={map(['One', 'Two', 'Three'], (label, i) => ({
            label,
            value: i + 1,
            checked: this.state.stunt === i + 1,
          }))}
          onClick={this.handleChange('stunt')}
        />
        <Button onClick={this.rollDice}>Roll</Button>
        <Caption>Roll History:</Caption>
        {this.renderRollHistory()}
      </DiceRollerWrapper>
    );
  }
}
