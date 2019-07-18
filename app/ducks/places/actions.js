import types from './types';

const actions = {
  getPlaces: payload => ({
    type: types.GET_PLACES,
    payload,
  }),
  setSearchHistory: payload => ({
    type: types.SET_SEARCH_HISTORY,
    payload,
  }),
};
export default actions;
