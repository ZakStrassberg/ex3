import React from 'react';

import { storiesOf } from '@storybook/react';

import AddCombatant from './AddCombatant';

storiesOf('Tracker.molecule.AddCombatant', module)
  .add('default', () => (
    <AddCombatant />
  ));
