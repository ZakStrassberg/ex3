import { combineReducers } from 'redux';
import { omit, without } from 'lodash';

import { ADD_COMBATANT, REMOVE_COMBATANT } from './actions';
import { initialState } from './selectors';

const combatantsById = (state = initialState.combatantsById, action) => {
  switch (action.type) {
    case ADD_COMBATANT: {
      const { payload: { combatant }, meta: { id } } = action;
      return {
        ...state,
        [id]: combatant,
      };
    }
    case REMOVE_COMBATANT: {
      const { meta: { id } } = action;
      return omit(state, { id });
    }
    default:
      return state;
  }
};

const allCombatants = (state = initialState.allCombatants, action) => {
  switch (action.type) {
    case ADD_COMBATANT: {
      const { meta: { id } } = action;
      return [...state, id];
    }
    case REMOVE_COMBATANT: {
      const { meta: { id } } = action;
      return without(state, id);
    }
    default:
      return state;
  }
};

export default combineReducers({
  combatantsById,
  allCombatants,
});
