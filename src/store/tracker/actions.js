// TYPE CONSTANTS
import { initialCombatantState } from './selectors';

export const ADD_COMBATANT = 'ADD_COMBATANT';
export const REMOVE_COMBATANT = 'REMOVE_COMBATANT';
export const UPDATE_COMBATANT = 'UPDATE_COMBATANT';

// ACTION CREATORS
export const action = (type, payload, meta) => ({
  type,
  payload,
  meta: {
    resource: 'tracker',
    ...meta,
  },
});

export const addCombatantAction = (name, initiative) => {
  console.log(name, initiative);
  const newCombatant = initialCombatantState({ name, initiative });
  console.log(newCombatant);
  return action(ADD_COMBATANT, { combatant: newCombatant }, { id: newCombatant.id });
};

export const updateCombatantAction = updatedCombatant =>
  action(UPDATE_COMBATANT, { combatant: updatedCombatant }, { id: updatedCombatant.id });
