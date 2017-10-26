import React from 'react';

import { storiesOf } from '@storybook/react';

import DiceRoller from './';

storiesOf('DiceRoller.molecule.DiceRoller', module).add('default', () => (
  <div style={{ width: '400px', margin: '0 auto' }}>
    <DiceRoller />
  </div>
));
