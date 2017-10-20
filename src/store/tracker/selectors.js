// https://github.com/diegohaz/arc/wiki/Selectors
export const initialState = {
  combatantsById: {
    1: {},
  },
};

export const getUser = (state = initialState) => state.user || initialState.user;
