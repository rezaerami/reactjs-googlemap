import { takeLatest } from 'redux-saga/effects';
import types from './types';

export function* getPlaces() {
  try {
    console.log('getPlaces saga');
  } catch (e) {
    console.log('err', e);
  }
}
const placesReducer = [takeLatest(types.GET_PLACES, getPlaces)];
export default placesReducer;
