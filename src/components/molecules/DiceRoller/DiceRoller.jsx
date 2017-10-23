import { map, get } from 'lodash';
import React, { Component } from 'react';
import styled from 'styled-components';

import { Caption } from '../../atoms/Typography';
import { NumberInput, RangeInput } from '../../atoms/Input';
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
      rollHistory: [],
    };
  }

  rollDice = () => {
    const roller = new Roll(this.state);
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
        <NumberInput value={this.state.autosuccesses} onChange={this.handleChange('autosuccesses')} />
        <RangeInput min="1" max="10" value={this.state.target} onChange={this.handleChange('target')} />
        <Button onClick={this.rollDice}>Roll</Button>
        <Caption>Roll History:</Caption>
        {this.renderRollHistory()}
      </DiceRollerWrapper>
    );
  }
}
