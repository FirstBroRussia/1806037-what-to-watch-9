import {createAction, PrepareAction} from '@reduxjs/toolkit';
import {BrowserHistory} from 'history';

const REDIRECT_TO_ROUTE = 'REDIRECT_TO_ROUTE';

const redirectToRouteAction = createAction<PrepareAction<BrowserHistory>>(REDIRECT_TO_ROUTE, (value) => ({
  payload: value,
}));


export {
  REDIRECT_TO_ROUTE,

  redirectToRouteAction
};
