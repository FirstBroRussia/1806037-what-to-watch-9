import axios from 'axios';
import {redirectToRouteAction} from '../store/actions';
import { setFetchErrorAction } from '../store/slices/other-slice';
import store from '../store/store';
import {AppRoute, HTTP_CODE} from './const';

const TIMEOUT_VISIBILITY_ERROR = 2000;

type ErrorType = unknown;

const handleErrors = (error: ErrorType): void => {
  if (!axios.isAxiosError(error)) {
    throw error;
  }
  const errorHttpCode = error.response?.status;
  const errorTextContent = error.response?.data.error;
  switch (errorHttpCode) {
    case (HTTP_CODE.BAD_REQUEST): {
      store.dispatch(setFetchErrorAction(errorTextContent));
      setTimeout(() => {
        store.dispatch(setFetchErrorAction(null));
      }, TIMEOUT_VISIBILITY_ERROR);
      break;
    }
    case (HTTP_CODE.UNAUTHORIZED): {
      store.dispatch(setFetchErrorAction(errorTextContent));
      setTimeout(() => {
        store.dispatch(setFetchErrorAction(null));
      }, TIMEOUT_VISIBILITY_ERROR);
      break;
    }
    case (HTTP_CODE.NOT_FOUND): {
      store.dispatch(redirectToRouteAction(AppRoute.NotFound));
      break;
    }
  }


};

export {handleErrors};
