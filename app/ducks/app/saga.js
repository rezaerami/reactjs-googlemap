import { takeLatest } from 'redux-saga/effects';
import types from './types';

export function* doSample() {
  try {
    console.log('do sample saga');
  } catch (e) {
    console.log('err', e);
  }
}
const sampleSaga = [takeLatest(types.DO_SAMPLE, doSample)];
export default sampleSaga;
