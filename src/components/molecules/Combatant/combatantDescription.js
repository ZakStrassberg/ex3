import { noop } from 'lodash';

const defaults = {
  onChange: noop,
};

export const defaultCombatants = [
  {
    ...defaults,
    id: 1,
    name: 'Harmonious Jade',
    initiative: 12,
    turnOver: false,
  },
  {
    ...defaults,
    id: 2,
    name: 'Peleps Deled',
    initiative: -3,
    turnOver: true,
  },
];

export default defaultCombatants[0];
