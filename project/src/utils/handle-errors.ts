/* eslint-disable no-console */
import axios from 'axios';
import {setFetchErrorAction} from '../store/actions';
import store from '../store/store';
import {HTTP_CODE} from './const';

const TIMEOUT_SHOW_ERROR = 2000;

type ErrorType = unknown;

const handleErrors = (error: ErrorType): void => {
  if (!axios.isAxiosError(error)) {
    throw error;
  }
  const errorHttpCode = error.response?.status;
  const errorTextContent = error.response?.statusText;
  switch (true) {
    case (errorHttpCode === HTTP_CODE.BAD_REQUEST): {
      store.dispatch(setFetchErrorAction(errorTextContent));
      setTimeout(() => {
        store.dispatch(setFetchErrorAction(null));
      }, TIMEOUT_SHOW_ERROR);
      break;
    }
  }


};

export {handleErrors};
