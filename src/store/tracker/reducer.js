import { combineReducers } from 'redux';
import { omit, without, mapValues, get } from 'lodash';

import {
  ADD_COMBATANT,
  END_TURN,
  REMOVE_COMBATANT,
  SORT_COMBATANTS,
  UPDATE_COMBATANT,
} from './actions';
import { initialState } from './selectors';

const combatantsById = (state = initialState.combatantsById, action) => {
  switch (action.type) {
    case UPDATE_COMBATANT:
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
    case END_TURN: {
      return mapValues(state, c => ({
        ...c,
        turnOver: false,
      }));
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
    case SORT_COMBATANTS: {
      return get(action, 'payload.combatantIdsSortedByInitiative', state);
    }
    default:
      return state;
  }
};

const turn = (state = initialState.turn, action) => {
  switch (action.type) {
    case END_TURN:
      return Number(state) + 1;
    default:
      return state;
  }
};

export default combineReducers({
  combatantsById,
  allCombatants,
  turn,
});
