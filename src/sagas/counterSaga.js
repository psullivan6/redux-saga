import { delay } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';

function* counterIncrement() {
  yield delay(4000); // [TEST] FPO API request

  yield put({ type: 'COUNTER_INCREMENT_ASYNC', value: 1 });
}

function* counterDecrement() {
  yield put({ type: 'COUNTER_INCREMENT_ASYNC', value: -1 });
}

function* counterSaga() {
  yield takeLatest('COUNTER_INCREMENT', counterIncrement);
}

export default counterSaga;
