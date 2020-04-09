/*
 *
 * Home actions
 *
 */

import { TRIGGER,
REQUEST,
SUCCESS,
FAIL,
FULLFILL } from './constants';

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
    error: data.error
  };
}

export function fullfillAction() {
  return {
    type: FULLFILL,
  };
}
