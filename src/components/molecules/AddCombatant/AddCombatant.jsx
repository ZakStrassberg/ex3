import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { StyledButton } from '../../atoms/Button';
import Field from '../Field';

import styled from 'styled-components';

const AddCombatantForm = styled.form`
  display: flex;
  justify-content: space-between;
  > * {
    flex: 0 0 auto;
  }
`;

const initialState = {
  name: '',
  initiative: 0,
};

export default class AddCombatant extends Component {
  static propTypes = {
    sendAddCombatantRequest: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  handleChange = field => ({ target: { value } }) =>
    this.setState({ [field]: field === 'initiative' ? Number(value) : value });

  handleAddCombatant = (e) => {
    e.preventDefault();
    this.props.sendAddCombatantRequest(this.state.name, this.state.initiative);
    this.setState({ ...initialState });
  };

  render() {
    return (
      <AddCombatantForm onSubmit={this.handleAddCombatant}>
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
      </AddCombatantForm>
    );
  }
}
