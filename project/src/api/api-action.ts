import {createAsyncThunk} from '@reduxjs/toolkit';
import {Requests, AuthorizationValue, AppRoute, HashFilmInfo} from '../utils/const';
import {FilmDataType, PostCommentAsyncParamType, SetStatusFavoriteFilmAsyncFilmParamsType} from '../types/types';
import store, {api} from '../store/store';
import {SignInFormType} from '../components/sign-in-page/sign-in-form';
import {deleteToken, setToken} from '../token/token';
import {handleErrors} from '../utils/handle-errors';
import {setAuthStatusAction, setUserDataAction} from '../store/slices/user-slice';
import {redirectToRouteAction} from '../store/actions';
import {setFilmsDataAction, setPromoFilmDataAction, setFavoriteFilmsDataAction, setFilmIdDataAction, setFilmIdCommentsDataAction, setSimilarFilmsDataAction} from '../store/slices/data-slice';
import {setIsFailPostCommentAction} from '../store/slices/other-slice';

const fetchGetAuthStatusAction = createAsyncThunk(
  'login/status',
  async () => {
    try {
      const {data} = await api.get<any>(Requests.Login);
      store.dispatch(setAuthStatusAction(AuthorizationValue.Auth));
      store.dispatch(setUserDataAction(data));
    } catch (error) {
      handleErrors(error);
      store.dispatch(setAuthStatusAction(AuthorizationValue.NoAuth));
    }
  },
);

const fetchPostLoginToServerAction = createAsyncThunk(
  'login/signIn',
  async (signInFormData: SignInFormType) => {
    try {
      const response = await api.post<any>(Requests.Login, signInFormData);
      const userData = response.data;
      const token = response.data.token;
      setToken(token);
      store.dispatch(setUserDataAction(userData));
      store.dispatch(setAuthStatusAction(AuthorizationValue.Auth));
    } catch (error) {
      handleErrors(error);
    }
  },
);

const fetchLogoutToServerAction = createAsyncThunk(
  'login/signOut',
  async () => {
    try {
      await api.delete<unknown>(Requests.Logout);
      deleteToken();
      store.dispatch(setUserDataAction(null));
      store.dispatch(setAuthStatusAction(AuthorizationValue.NoAuth));
    } catch (error) {
      handleErrors(error);
    }
  },
);

const fetchGetFilmsDataAction = createAsyncThunk(
  'data/getFilmsData',
  async () => {
    try {
      const {data} = await api.get<FilmDataType[]>(Requests.Films);
      store.dispatch(setFilmsDataAction(data));
    } catch (error) {
      handleErrors(error);
    }
  },
);

const fetchGetPromoFilmAction = createAsyncThunk(
  'data/getPromoFilm',
  async () => {
    try {
      const {data} = await api.get<FilmDataType>(Requests.Promo);
      store.dispatch(setPromoFilmDataAction(data));
    } catch (error) {
      handleErrors(error);
    }
  },
);

const fetchGetFavoriteFilmsDataAction = createAsyncThunk(
  'data/getFavoriteFilms',
  async () => {
    try {
      const {data} = await api.get(Requests.Favorite);
      store.dispatch(setFavoriteFilmsDataAction(data));
    } catch (error) {
      handleErrors(error);
    }
  },
);

const fetchSetStatusFavotiteFilmAction = createAsyncThunk(
  'data/setStatusFilm',
  async ({idFilm, status, promo}: SetStatusFavoriteFilmAsyncFilmParamsType) => {
    try {
      const {data} = await api.post(`${Requests.Favorite}/${idFilm}/${status}`);
      promo ? store.dispatch(setPromoFilmDataAction(data)) : store.dispatch(setFilmIdDataAction(data));
    } catch (error) {
      handleErrors(error);
    }
  },
);

const fetchGetIdFilmAction = createAsyncThunk(
  'data/filmID',
  async (id: number) => {
    try {
      const {data} = await api.get<FilmDataType>(`${Requests.Films}/${id}`);
      store.dispatch(setFilmIdDataAction(data));
    } catch (error) {
      handleErrors(error);
    }
  },
);

const fetchGetIdFilmCommentsListAction = createAsyncThunk(
  'data/filmIDCommentsList',
  async (idFilm: number) => {
    try {
      const {data} = await api.get(`${Requests.Comments}/${idFilm}`);
      store.dispatch(setFilmIdCommentsDataAction(data));
    } catch (error) {
      handleErrors(error);
    }
  },
);

const fetchGetSimilarFilmsAction = createAsyncThunk(
  'data/similarFilms',
  async (idFilm: number) => {
    try {
      const {data} = await api.get(`${Requests.Films}/${idFilm}${Requests.Similar}`);
      store.dispatch(setSimilarFilmsDataAction(data));
    } catch (error) {
      handleErrors(error);
    }
  },
);

const fetchPostCommentAction = createAsyncThunk(
  'data/postComment',
  async ({idFilm, commentData}: PostCommentAsyncParamType) => {
    try {
      const {data} = await api.post(`${Requests.Comments}/${idFilm}`, commentData);
      store.dispatch(setFilmIdCommentsDataAction(data));
      store.dispatch(redirectToRouteAction(`${AppRoute.Film}/${idFilm}${HashFilmInfo.Reviews}`));
    } catch (error) {
      store.dispatch(setIsFailPostCommentAction(true));
      store.dispatch(setIsFailPostCommentAction(false));
      handleErrors(error);
    }
  },
);

export {fetchGetAuthStatusAction, fetchPostLoginToServerAction, fetchLogoutToServerAction, fetchGetFilmsDataAction, fetchGetPromoFilmAction, fetchGetFavoriteFilmsDataAction, fetchSetStatusFavotiteFilmAction, fetchGetIdFilmAction, fetchGetIdFilmCommentsListAction, fetchGetSimilarFilmsAction, fetchPostCommentAction};
