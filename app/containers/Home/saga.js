import { take, call, put, select, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { REQUEST_SQL_MAP,
         REQUEST_WP_SCAN,
  } from './constants';
import {
  successSQLMap,
  failSQLMap,
  successWPScan,
  failWPScan
  } from './actions';

export function* requestSQLMapSaga(action) {
  try {
    const sqlMapResponse = yield call(axios, {
      method: 'GET',
      url: `http://localhost:8000/sqlmap?website=${action.website}`,
    });
    const { data } = sqlMapResponse;
    yield put(
      successSQLMap({
        data,
      }),
    );
  } catch (error) {
    yield put(
      failSQLMap({
        error,
      }),
    );
  }
}

export function* requestWPScanSaga(action) {
  try {
    const wpScanResponse = yield call(axios, {
      method: 'GET',
      url: `http://localhost:8000/wpscan?website=${action.website}`,
    });
    const { data } = wpScanResponse;
    yield put(
      successWPScan({
        data,
      }),
    );
  } catch (error) {
    yield put(
      failWPScan({
        error,
      }),
    );
  }
}

// Individual exports for testing
export default function* homeSaga() {
  yield takeEvery(REQUEST_SQL_MAP, requestSQLMapSaga);
  yield takeEvery(REQUEST_WP_SCAN, requestWPScanSaga);
}
