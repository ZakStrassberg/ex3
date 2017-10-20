import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Combatant from './';
import { defaultCombatant } from './combatantDescription';

const stories = storiesOf('Storybook Knobs', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

stories
  .add('Turn not over', () => <Combatant combatant={defaultCombatant} />)
  .add('Turn over', () => <Combatant combatant={{ ...defaultCombatant, turnOver: true }} />)
  .add('With knobs', () => {
    const combatantWithKnobs = {
      id: defaultCombatant.id,
      name: text('Name', defaultCombatant.name),
      turnOver: boolean('Turn Over', defaultCombatant.turnOver),
      initiative: number('Initiative', defaultCombatant.initiative),
    };

    return <Combatant combatant={combatantWithKnobs} />;
  });
