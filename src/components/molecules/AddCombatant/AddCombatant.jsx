import React, { Component } from 'react';

import Button from '../../atoms/Button/Button';
import Field from '../Field/Field';

export default class AddCombatant extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      initiative: 0,
    };
  }

  handleChange = field => value => this.setState({ [field]: value });
  handleAddCombatant = () => {
    console.log(this.state);
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
          value={this.state.name}
          onChange={this.handleChange('initiative')}
        />
        <Button onClick={this.handleAddCombatant} text="Add Combatant" />
      </form>
    );
  }
}
