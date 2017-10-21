import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Combatant from './';
import defaultCombatant from './combatantDescription';

const stories = storiesOf('Combatant', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

class CombatantWrapper extends PureComponent {
  static propTypes = {
    toggling: PropTypes.bool,
    editable: PropTypes.bool,
  };
  static defaultProps = {
    toggling: false,
    editable: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      ...defaultCombatant,
    };
  }
  componentDidMount() {
    this.timer = this.props.toggling
      ? setInterval(() => this.setState({ turnOver: !this.state.turnOver }), 2500)
      : null;
  }
  componentWillUnmount() {
    window.clearInterval(this.timer);
  }
  onChange = (field, value) => (this.props.editable ? this.setState({ [field]: value }) : null);
  render() {
    return <Combatant combatant={this.state} onChange={this.onChange} />;
  }
}

stories
  .add('Static', () => (
    <div>
      <Combatant combatant={defaultCombatant} />
      <Combatant combatant={{ ...defaultCombatant, turnOver: true }} />
    </div>
  ))
  .add('With knobs', () => {
    const combatantWithKnobs = {
      id: defaultCombatant.id,
      name: text('Name', defaultCombatant.name),
      turnOver: boolean('Turn Over', defaultCombatant.turnOver),
      initiative: number('Initiative', defaultCombatant.initiative),
    };

    return <Combatant combatant={combatantWithKnobs} />;
  })
  .add('Toggling turn over', () => <CombatantWrapper toggling />)
  .add('Editable', () => <CombatantWrapper editable />);
