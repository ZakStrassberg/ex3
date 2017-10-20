import React from 'react';

import { storiesOf } from '@storybook/react';

import AddCombatant from './AddCombatant';

storiesOf('Tracker.Molecule.AddCombatant', module)
  .add('default', () => (
    <AddCombatant />
  ));
