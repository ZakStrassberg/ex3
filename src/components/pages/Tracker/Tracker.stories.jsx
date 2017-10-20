import React from 'react';

import { storiesOf } from '@storybook/react';

import { defaultCombatants } from '../../molecules/Combatant/combatantDescription';
import Tracker from './';

storiesOf('Tracker.page.Tracker', module).add('default', () => <Tracker combatants={defaultCombatants} />);
