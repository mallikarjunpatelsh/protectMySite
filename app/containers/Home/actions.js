/*
 *
 * Home actions
 *
 */

import {
  REQUEST_SQL_MAP,
  SUCCESS_SQL_MAP,
  FAIL_SQL_MAP,
  TRIGGER_SQL_MAP,
  TRIGGER_WP_SCAN,
  REQUEST_WP_SCAN,
  SUCCESS_WP_SCAN,
  FAIL_WP_SCAN,
} from './constants';

export function tirggerSQLMap() {
  return {
    type: TRIGGER_SQL_MAP,
  };
}

export function requestSQLMap(website) {
  return {
    type: REQUEST_SQL_MAP,
    website,
  };
}

export function successSQLMap(resultData) {
  return {
    type: SUCCESS_SQL_MAP,
    resultData,
  };
}

export function failSQLMap(error) {
  return {
    type: FAIL_SQL_MAP,
    error,
  };
}

export function tirggerWPScan() {
  return {
    type: TRIGGER_WP_SCAN,
  };
}

export function requestWPScan(website) {
  return {
    type: REQUEST_WP_SCAN,
    website,
  };
}

export function successWPScan(resultData) {
  return {
    type: SUCCESS_WP_SCAN,
    resultData,
  };
}

export function failWPScan(error) {
  return {
    type: FAIL_WP_SCAN,
    error,
  };
}