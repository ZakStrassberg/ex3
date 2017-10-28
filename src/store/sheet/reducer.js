import { combineReducers } from 'redux';
import { initialState } from './selectors';

const charactersById = (state = initialState.charactersById, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const allCharacters = (state = initialState.allCharacters, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  charactersById,
  allCharacters,
});
