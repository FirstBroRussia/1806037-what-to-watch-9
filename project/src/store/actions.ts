import {createAction} from '@reduxjs/toolkit';

const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
const SET_USER_DATA = 'SET_USER_DATA';
const DELETE_USER_DATA = 'DELETE_USER_DATA';

const INITIAL_MAIN_FILMS_DATA = 'INITIAL_MAIN_FILMS_DATA';
const INITIAL_PROMO_FILM_DATA = 'INITIAL_PROMO_FILM_DATA';
const SET_FILM_ID_DATA = 'SET_FILM_ID_DATA';
const SET_FILM_ID_COMMENTS_DATA = 'SET_FILM_ID_COMMENTS_DATA';
const SET_SIMILAR_FILMS_DATA = 'SET_SIMILAR_FILMS_DATA';

const SET_GENRES_STATE = 'SET_GENRES_STATE';

const INITIAL_VISIBLE_FILMS = 'INITIAL_VISIBLE_FILMS';
const INC_VISIBLE_FILMS = 'INC_VISIBLE_MOVIES';

const SET_FETCH_ERROR = 'SET_FETCH_ERROR';
const SET_IS_FAIL_POST_COMMENT = 'SET_IS_FAIL_POST_COMMENT';

const REDIRECT_TO_ROUTE = 'REDIRECT_TO_ROUTE';

const setAuthStatusAction = createAction(SET_AUTH_STATUS, (value) => ({
  payload: value,
}));
const setUserDataAction = createAction(SET_USER_DATA, (value) => ({
  payload: value,
}));
const deleteUserDataAction = createAction(DELETE_USER_DATA);

const setFilmsDataAction = createAction(INITIAL_MAIN_FILMS_DATA, (value) => ({
  payload: value,
}));
const setPromoFilmDataAction = createAction(INITIAL_PROMO_FILM_DATA, (value) => ({
  payload: value,
}));
const setFilmIdDataAction = createAction(SET_FILM_ID_DATA, (value) => ({
  payload: value,
}));
const setFilmIdCommentsDataAction = createAction(SET_FILM_ID_COMMENTS_DATA, (value) => ({
  payload: value,
}));
const setSimilarFilmsDataAction = createAction(SET_SIMILAR_FILMS_DATA, (value) => ({
  payload: value,
}));

const setGenresStateAction = createAction(SET_GENRES_STATE, (value) => ({
  payload: value,
}));
const setInitialVisibleFilmsState = createAction(INITIAL_VISIBLE_FILMS);
const setIncVisibleFilmsState = createAction(INC_VISIBLE_FILMS);
const setFetchErrorAction = createAction(SET_FETCH_ERROR, (value) => ({
  payload: value,
}));
const setIsFailPostCommentAction = createAction(SET_IS_FAIL_POST_COMMENT, (value) => ({
  payload: value,
}));

const redirectToRouteAction = createAction(REDIRECT_TO_ROUTE, (value) => ({
  payload: value,
}));


export {
  REDIRECT_TO_ROUTE,

  setAuthStatusAction,
  setUserDataAction,
  deleteUserDataAction,
  setFilmsDataAction,
  setPromoFilmDataAction,
  setFilmIdDataAction,
  setFilmIdCommentsDataAction,
  setSimilarFilmsDataAction,

  setGenresStateAction,
  setInitialVisibleFilmsState,
  setIncVisibleFilmsState,

  setFetchErrorAction,
  setIsFailPostCommentAction,

  redirectToRouteAction
};
