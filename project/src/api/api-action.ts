/* eslint-disable no-console */
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Requests, AuthorizationValue} from '../utils/const';
import {FilmDataType} from '../types/types';
import {deleteUserDataAction, setAuthStatusAction, setFilmsDataAction, setPromoFilmDataAction, setUserDataAction} from '../store/actions';
import store, {api} from '../store/store';
import {SignInFormType} from '../components/sign-in-page/sign-in-form';
import {deleteToken, setToken} from '../token/token';


const fetchGetAuthStatusAction = createAsyncThunk(
  'login/status',
  async () => {
    try {
      const {data} = await api.get(Requests.Login);
      store.dispatch(setAuthStatusAction(AuthorizationValue.Auth));
      store.dispatch(setUserDataAction(data));
    } catch (error) {
      // ТУТ НАДО ВЫВОДИТЬ ОШИБКУ НА ЭКРАН ЧТОБ БЫЛО ПОНЯТНО
      console.log(error);
      store.dispatch(setAuthStatusAction(AuthorizationValue.NoAuth));
    }
  },
);

const fetchPostLoginToServerAction = createAsyncThunk(
  'login/signIn',
  async (signInFormData: SignInFormType) => {
    try {
      const response = await api.post(Requests.Login, signInFormData);
      const userData = response.data;
      const token = response.data.token;
      setToken(token);
      store.dispatch(setUserDataAction(userData));
      store.dispatch(setAuthStatusAction(AuthorizationValue.Auth));
    } catch (error) {
      console.log(error);
    }
  },
);

const fetchLoginOutToServerAction = createAsyncThunk(
  'login/signOut',
  async () => {
    try {
      await api.delete(Requests.Logout);
      deleteToken();
      store.dispatch(deleteUserDataAction());
      store.dispatch(setAuthStatusAction(AuthorizationValue.NoAuth));
    } catch (error) {
      console.log(error);
    }
  },
);

const fetchGetFilmsDataAction = createAsyncThunk(
  'data/getFilmsData',
  async () => {
    const {data} = await api.get<FilmDataType[]>(Requests.Films);
    store.dispatch(setFilmsDataAction(data));
  },
);

const fetchGetPromoFilmAction = createAsyncThunk(
  'data/getPromoFilm',
  async () => {
    const {data} = await api.get<FilmDataType>(Requests.Promo);
    store.dispatch(setPromoFilmDataAction(data));
  },
);


export {fetchGetAuthStatusAction, fetchPostLoginToServerAction, fetchLoginOutToServerAction, fetchGetFilmsDataAction, fetchGetPromoFilmAction};
