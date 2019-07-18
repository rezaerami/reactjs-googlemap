import { takeLatest, call, select, put } from 'redux-saga/effects';

import api from './api';
import types from './types';
import selectors from './selectors';
import actions from './actions';

import defaultMessages from '../../constants/defaultMessages';

export function* getPlaces(action) {
  const {
    payload: { query, onSuccess, onFailed },
  } = action;
  try {
    yield select(selectors.searchHistory);
    yield put(actions.setSearchHistory(query));
    const response = yield call(api.getPlaces, { query });
    const { results } = response;
    yield call(onSuccess, results);
  } catch (e) {
    console.log('err', e);
    let error = defaultMessages.promiseFailed;
    if (e.response) {
      const {
        response: { error_message: errorMessage },
      } = e;
      error = errorMessage;
    }
    yield call(onFailed, error);
  }
}
const placesReducer = [takeLatest(types.GET_PLACES, getPlaces)];
export default placesReducer;
