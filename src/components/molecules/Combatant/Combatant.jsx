import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Checkbox from '../../atoms/Checkbox';

export default class MyComponent extends Component {
  static propTypes = {
    combatant: PropTypes.shape({
      id: PropTypes.number.isRequired,
      turnOver: PropTypes.bool.isRequired,
      initiative: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { combatant: { id, turnOver, initiative, name } } = this.props;
    return (
      <div key={id}>
        <Checkbox name={`turnover-${id}`} checked={turnOver} />
        - {initiative} - {name}
      </div>
    );
  }
}
