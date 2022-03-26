/* eslint-disable no-console */
import axios from 'axios';
import {redirectToRouteAction, setFetchErrorAction} from '../store/actions';
import store from '../store/store';
import {AppRoute, HTTP_CODE} from './const';
// import {toast} from 'react-toastify';

const TIMEOUT_VISIBILITY_ERROR = 2000;

type ErrorType = unknown;

const handleErrors = (error: ErrorType): void => {
  if (!axios.isAxiosError(error)) {
    throw error;
  }
  const errorHttpCode = error.response?.status;
  const errorTextContent = error.response?.data.error;
  switch (true) {
    case (errorHttpCode === HTTP_CODE.BAD_REQUEST): {
      store.dispatch(setFetchErrorAction(errorTextContent));
      setTimeout(() => {
        store.dispatch(setFetchErrorAction(null));
      }, TIMEOUT_VISIBILITY_ERROR);
      // toast.error(errorTextContent);
      break;
    }
    case (errorHttpCode === HTTP_CODE.UNAUTHORIZED): {
      store.dispatch(setFetchErrorAction(errorTextContent));
      setTimeout(() => {
        store.dispatch(setFetchErrorAction(null));
      }, TIMEOUT_VISIBILITY_ERROR);
      // toast.info(errorTextContent);
      break;
    }
    case (errorHttpCode === HTTP_CODE.NOT_FOUND): {
      store.dispatch(redirectToRouteAction(AppRoute.NotFound));
      break;
    }
  }


};

export {handleErrors};
