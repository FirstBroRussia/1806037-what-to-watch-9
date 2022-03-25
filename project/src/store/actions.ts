import {createAction} from '@reduxjs/toolkit';
import {FiltersHash} from '../utils/const';

const SET_AUTH_STATUS = 'SET_AUTH_STATUS';
const SET_USER_DATA = 'SET_USER_DATA';
const DELETE_USER_DATA = 'DELETE_USER_DATA';

const INITIAL_MAIN_FILMS_DATA = 'INITIAL_MAIN_FILMS_DATA';
const INITIAL_PROMO_FILM_DATA = 'INITIAL_PROMO_FILM_DATA';

const INITIAL_VISIBLE_FILMS = 'INITIAL_VISIBLE_FILMS';
const INC_VISIBLE_FILMS = 'INC_VISIBLE_MOVIES';

const SET_FETCH_ERROR = 'SET_FETCH_ERROR';

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

const setGenresStateAction = createAction(FiltersHash.All, (value) => ({
  payload: value,
}));
const setInitialVisibleFilmsState = createAction(INITIAL_VISIBLE_FILMS);
const setIncVisibleFilmsState = createAction(INC_VISIBLE_FILMS);

const setFetchErrorAction = createAction(SET_FETCH_ERROR, (value) => ({
  payload: value,
}));


export {
  setAuthStatusAction,
  setUserDataAction,
  deleteUserDataAction,
  setFilmsDataAction,
  setPromoFilmDataAction,

  setGenresStateAction,
  setInitialVisibleFilmsState,
  setIncVisibleFilmsState,

  setFetchErrorAction
};
