import React from 'react';

import { storiesOf } from '@storybook/react';

import { defaultCombatants } from '../../../store/tracker/selectors';
import Tracker from './';

storiesOf('Tracker.page.Tracker', module).add('default', () => <Tracker combatants={defaultCombatants} />);
