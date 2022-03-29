import {createAction} from '@reduxjs/toolkit';

const REDIRECT_TO_ROUTE = 'REDIRECT_TO_ROUTE';

const redirectToRouteAction = createAction(REDIRECT_TO_ROUTE, (value) => ({
  payload: value,
}));


export {
  REDIRECT_TO_ROUTE,

  redirectToRouteAction
};
