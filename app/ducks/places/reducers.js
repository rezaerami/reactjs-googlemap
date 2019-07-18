import types from './types';

const placesDefaultState = {
  searchHistory: [],
};

const placesReducer = (state = placesDefaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_PLACES_SEARCH_HISTORY:
      return {
        ...state,
        searchHistory: payload,
      };
    default:
      return state;
  }
};

export default placesReducer;
