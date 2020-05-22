/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import {
  SUCCESS_SQL_MAP,
  FAIL_SQL_MAP,
  TRIGGER_SQL_MAP,
  SUCCESS_WP_SCAN,
  FAIL_WP_SCAN,
  TRIGGER_WP_SCAN
} from './constants';

export const initialState = {
  error: false,
  loadingSqlMap: false,
  loadingWpScan: false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TRIGGER_SQL_MAP:
        draft.loadingSqlMap = true;
        break;
      case SUCCESS_SQL_MAP:
        draft.sqlMapData = action.resultData;
        draft.loadingSqlMap = false;
        break;
      case FAIL_SQL_MAP:
        draft.sqlMapError = action.error;
        draft.loadingSqlMap = false;
        break;
      case TRIGGER_WP_SCAN:
        draft.loadingWpScan = true;
        break;
      case SUCCESS_WP_SCAN:
        draft.WpScanData = action.resultData;
        draft.loadingWpScan = false;
        break;
      case FAIL_WP_SCAN:
        draft.WpScanError = action.error;
        draft.loadingWpScan = false;
        break;
    }
  });

export default homeReducer;
