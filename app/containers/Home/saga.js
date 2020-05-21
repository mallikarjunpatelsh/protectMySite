import { take, call, put, select, takeEvery } from 'redux-saga/effects';
import { REQUEST,REQUEST_WEBSITE_PORTS,REQUEST_SQL_MAP } from './constants';
import { successAction, failAction, fullfillAction,
successWebsitePorts,failWebsitePorts,
successSQLMap,
failSQLMap,
requestSQLMap
} from './actions';
import axios from 'axios';
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

export function* requestWebsitePorts(action) {
  try {
      const getUrlDetailsResponse = yield call(
        axios,{
          method: 'GET',
          url: `https://ip-api.com/json/${action.requestData.url}`
        }
      )
      const ip = getUrlDetailsResponse.data.query
      const YOUR_API_KEY = ''
      console.log(ip)
      const message = {
      method: 'GET',
      url: `https://api.shodan.io/shodan/host/${ip}?key=${YOUR_API_KEY}`,
      };
    const response = yield call(axios, message);
    yield put(
      successWebsitePorts({
        ipData: response.data,
      }),
    );
  } catch (error) {
    yield put(
      failWebsitePorts({
        error: error,
      }),
    );
  }
}

export function* requestSQLMapSaga(action) {
  try {
      const sqlMapResponse = yield call(
        axios,{
          method: 'GET',
          url: `http://localhost:8000/sqlmap?website=${action.website}`
        }
      )
      const data = sqlMapResponse.data
      yield put(
      successSQLMap({
  data     
 }),
    );
  } catch (error) {
    yield put(
      failSQLMap({
        error: error,
      }),
    );
  }
}

// Individual exports for testing
export default function* homeSaga() {
  yield takeEvery(REQUEST, request);
  yield takeEvery(REQUEST_WEBSITE_PORTS, requestWebsitePorts);
  yield takeEvery(REQUEST_SQL_MAP, requestSQLMapSaga);
}
