/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import { TRIGGER,
FAIL,
SUCCESS,
FULLFILL,
REQUEST_WEBSITE_PORTS,
SUCCESS_WEBSITE_PORTS,
FAIL_WEBSITE_PORTS
} from './constants';

export const initialState = {
  loading : false,
  urlData : {},
  emailData : {},
  error : false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case TRIGGER:
        draft.loading = true;
        break;
      case FULLFILL:
        draft.loading = false;
        break;
      case SUCCESS:
        const {emailData,urlData} = action.responseData
        draft.emailData = emailData;
        draft.urlData = urlData;
        break;
      case FAIL:
        draft.error = action.error;
        break;
      case REQUEST_WEBSITE_PORTS:
        draft.loadingShodan = true;
        break;
        case SUCCESS_WEBSITE_PORTS:
        draft.ipData = action.responseData.ipData;
        draft.loadingShodan = false;
        break;
      case FAIL_WEBSITE_PORTS:
        draft.ipData = action.responseData;
        draft.loadingShodan = false;
        break;
    }
  });

export default homeReducer;
