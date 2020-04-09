/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import { TRIGGER,
FAIL,
SUCCESS,
FULLFILL } from './constants';

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
    }
  });

export default homeReducer;
