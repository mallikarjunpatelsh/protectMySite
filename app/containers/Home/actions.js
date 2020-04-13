/*
 *
 * Home actions
 *
 */

import { TRIGGER,
REQUEST,
SUCCESS,
FAIL,
FULLFILL,
REQUEST_WEBSITE_PORTS,
SUCCESS_WEBSITE_PORTS,
FAIL_WEBSITE_PORTS,
} from './constants';

export function requestWebsitePorts(data) {
return {
  type: REQUEST_WEBSITE_PORTS,
  requestData: data
}
}

export function successWebsitePorts(data) {
  return {
    type: SUCCESS_WEBSITE_PORTS,
    responseData: data
  }
  }

  export function failWebsitePorts(data) {
    return {
      type: FAIL_WEBSITE_PORTS,
      responseData: data.error
    }
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
    error: data.error
  };
}

export function fullfillAction() {
  return {
    type: FULLFILL,
  };
}
