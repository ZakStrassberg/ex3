import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import { StyledCheckbox } from '../../atoms/Checkbox';
import { StyledInput } from '../../atoms/Input';

const CombatantWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  background: ${props => (!props.turnOver ? 'gold' : 'grey')};
  padding: 20px;
  max-width: 375px;
  transition: 0.4s all;
`;

const Checkbox = styled(StyledCheckbox)``;

const InitiativeInput = styled(StyledInput).attrs({ type: 'number' })`
  width: 45px;
`;
const NameInput = styled(StyledInput).attrs({ type: 'text' })`
  width: 270px;
`;

export default class Combatant extends Component {
  static propTypes = {
    combatant: PropTypes.shape({
      id: PropTypes.number.isRequired,
      turnOver: PropTypes.bool.isRequired,
      initiative: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = field => ({ target: { value } }) => {
    switch (field) {
      case 'initiative':
        this.props.onChange({
          ...this.props.combatant,
          [field]: Number(value),
        });
        break;
      case 'turnOver':
        this.props.onChange({
          ...this.props.combatant,
          [field]: !this.props.combatant.turnOver,
        });
        break;
      default:
        this.props.onChange({
          ...this.props.combatant,
          [field]: value,
        });
        break;
    }
  };

  render() {
    const { combatant: { id, turnOver, initiative, name } } = this.props;
    return (
      <CombatantWrapper key={id} turnOver={turnOver}>
        <Checkbox
          name={`turnover-${id}`}
          checked={turnOver}
          onChange={this.handleChange('turnOver')}
        />
        <InitiativeInput value={initiative} onChange={this.handleChange('initiative')} />
        <NameInput value={name} onChange={this.handleChange('name')} />
      </CombatantWrapper>
    );
  }
}
