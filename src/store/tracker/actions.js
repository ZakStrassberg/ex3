// TYPE CONSTANTS
import { initialCombatantState } from './selectors';

export const ADD_COMBATANT = 'ADD_COMBATANT';
export const REMOVE_COMBATANT = 'REMOVE_COMBATANT';
export const UPDATE_COMBATANT = 'UPDATE_COMBATANT';
export const END_TURN = 'END_TURN';
export const SORT_COMBATANTS = 'SORT_COMBATANTS';

// ACTION CREATORS
export const action = (type, payload = {}, meta = {}) => ({
  type,
  payload,
  meta: {
    resource: 'tracker',
    ...meta,
  },
});

export const addCombatantAction = (name, initiative) => {
  const newCombatant = initialCombatantState({ name, initiative });
  return action(ADD_COMBATANT, { combatant: newCombatant }, { id: newCombatant.id });
};

export const updateCombatantAction = updatedCombatant =>
  action(UPDATE_COMBATANT, { combatant: updatedCombatant }, { id: updatedCombatant.id });

export const endTurnAction = () => action(END_TURN);

export const sortCombatantsAction = combatantIdsSortedByInitiative =>
  action(SORT_COMBATANTS, { combatantIdsSortedByInitiative });
