import types from './types';

const actions = {
  getPlaces: payload => ({
    type: types.GET_PLACES,
    payload,
  }),
  setPlacesSearchHistory: payload => ({
    type: types.SET_PLACES_SEARCH_HISTORY,
    payload,
  }),
};
export default actions;
