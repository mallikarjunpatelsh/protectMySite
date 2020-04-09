import { take, call, put, select, takeEvery } from 'redux-saga/effects';
import { REQUEST } from './constants';
import { successAction, failAction, fullfillAction } from './actions';

export function* request(action) {
  try {
    alert(JSON.stringify(action.requestData));
    yield put(
      successAction({
        urlData: 'dummy',
        emailData: 'dummy',
      }),
    );
  } catch (error) {
    yield put(
      failAction({
        error: error,
      }),
    );
  } finally {
    yield put(fullfillAction());
  }
}

// Individual exports for testing
export default function* homeSaga() {
  yield takeEvery(REQUEST, request);
}
