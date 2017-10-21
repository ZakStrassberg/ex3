// https://github.com/diegohaz/arc/wiki/Selectors

import { noop, keyBy, map } from 'lodash';

function* idMaker() {
  let id = 0;
  while (true) {
    yield ++id;
  }
}

const generateId = idMaker();

export const initialCombatantState = ({
  id = generateId.next().value,
  name = '',
  initiative = 0,
  turnOver = false,
  onChange = noop,
} = {}) => ({
  id,
  name,
  initiative,
  turnOver,
  onChange,
});

export const defaultCombatants = [
  {
    ...initialCombatantState(),
    id: 1,
    name: 'Harmonious Jade',
    initiative: 12,
  },
  {
    ...initialCombatantState(),
    id: 2,
    name: 'Peleps Deled',
    initiative: -3,
    turnOver: true,
  },
];

export const initialState = {
  combatantsById: keyBy(defaultCombatants, 'id'),
  allCombatants: map(defaultCombatants, ({ id }) => id),
};

export const emptyState = {
  combatantsById: {},
  allCombatants: [],
};

export const getCombatantsById = (state = initialState) =>
  state.combatantsById || initialState.combatantsById;

export const getAllCombatants = (state = initialState) =>
  state.allCombatants || initialState.allCombatants;

export const getCombatant = (state = initialState, id) =>
  state.combatantsById[id] || initialCombatantState();
