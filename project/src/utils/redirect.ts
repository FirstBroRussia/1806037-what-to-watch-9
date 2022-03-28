import {Middleware} from '@reduxjs/toolkit';
import {REDIRECT_TO_ROUTE} from '../store/actions';
import reducer from '../store/reducer';
import {browserHistory} from './browser-history';

type Reducer = ReturnType<typeof reducer>;

const redirect: Middleware<unknown, Reducer> = (store) => (dispatch) => (action) => {
  if (action.type === REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return dispatch(action);
};

export {redirect};
