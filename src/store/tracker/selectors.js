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
  initialCombatantState({
    name: 'Harmonious Jade',
    initiative: 12,
  }),
  initialCombatantState({
    name: 'Lotus',
    initiative: 12,
  }),
  initialCombatantState({
    name: 'Dread Scarlet',
    initiative: 6,
  }),
  initialCombatantState({
    name: 'Peleps Deled',
    initiative: -3,
  }),
];

export const initialState = {
  combatantsById: keyBy(defaultCombatants, 'id'),
  allCombatants: map(defaultCombatants, ({ id }) => id),
  turn: 0,
};

export const emptyState = {
  combatantsById: {},
  allCombatants: [],
  turn: 0,
};

export const getCombatantsById = (state = initialState) =>
  state.combatantsById || initialState.combatantsById;

export const getAllCombatants = (state = initialState) =>
  state.allCombatants || initialState.allCombatants;

export const getCombatant = (state = initialState, id) =>
  state.combatantsById[id] || initialCombatantState();
