import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { StyledButton } from '../../atoms/Button';
import Field from '../Field';

export default class AddCombatant extends Component {
  static propTypes = {
    sendAddCombatantRequest: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      initiative: 0,
    };
  }

  handleChange = field => ({ target: { value } }) =>
    this.setState({ [field]: field === 'initiative' ? Number(value) : value });

  handleAddCombatant = (e) => {
    e.preventDefault();
    this.props.sendAddCombatantRequest(this.state.name, this.state.initiative);
  };

  render() {
    return (
      <form onSubmit={this.handleAddCombatant}>
        <Field
          name="name"
          label="Name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange('name')}
        />
        <Field
          name="initiative"
          label="Initiative"
          type="number"
          value={this.state.initiative}
          onChange={this.handleChange('initiative')}
        />
        <StyledButton onClick={this.handleAddCombatant}>Add Combatant</StyledButton>
      </form>
    );
  }
}
