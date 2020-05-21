/*
 *
 * Home actions
 *
 */

import {
  TRIGGER,
  REQUEST,
  SUCCESS,
  FAIL,
  FULLFILL,
  REQUEST_WEBSITE_PORTS,
  SUCCESS_WEBSITE_PORTS,
  FAIL_WEBSITE_PORTS,
  REQUEST_SQL_MAP,
  SUCCESS_SQL_MAP,
  FAIL_SQL_MAP,
  TRIGGER_SQL_MAP,
} from './constants';

export function requestWebsitePorts(data) {
  return {
    type: REQUEST_WEBSITE_PORTS,
    requestData: data,
  };
}

export function successWebsitePorts(data) {
  return {
    type: SUCCESS_WEBSITE_PORTS,
    responseData: data,
  };
}

export function failWebsitePorts(data) {
  return {
    type: FAIL_WEBSITE_PORTS,
    responseData: data.error,
  };
}

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
export function triggerAction() {
  return {
    type: TRIGGER,
  };
}

export function requestAction(data) {
  return {
    type: REQUEST,
    requestData: data,
  };
}

export function successAction(data) {
  return {
    type: SUCCESS,
    responseData: data,
  };
}

export function failAction(data) {
  return {
    type: FAIL,
    error: data.error,
  };
}

export function fullfillAction() {
  return {
    type: FULLFILL,
  };
}
