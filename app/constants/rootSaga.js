import { all } from 'redux-saga/effects';
import appSaga from '../ducks/app/saga';

export default function* rootSaga() {
  yield all([
    ...appSaga,
  ]);
}
