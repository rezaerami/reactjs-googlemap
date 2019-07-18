import types from './types';
import utils from './utils';

const placesDefaultState = {
  searchHistory: [],
};

const placesReducer = (state = placesDefaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: utils.normalizeSearchHistory(
          state.searchHistory,
          payload,
        ),
      };
    default:
      return state;
  }
};

export default placesReducer;
