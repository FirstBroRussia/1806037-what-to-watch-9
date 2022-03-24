import {createReducer} from '@reduxjs/toolkit';
import {VISIBLE_FILMS_STEP_COUNT, AuthorizationValue} from '../utils/const';
import {FilmDataType} from '../types/types';
import {
  setAuthStatusAction,
  setUserDataAction,
  deleteUserDataAction,
  setFilmsDataAction,
  setPromoFilmDataAction,

  setGenresStateAction,
  setInitialVisibleFilmsState,
  setIncVisibleFilmsState,

  setFetchErrorAction
} from './actions';

type initialStateType = {
  authorizationStatus: string,
  userData: any,
  isPrimaryLoadData: boolean,
  filmsData: FilmDataType[] | [],
  promoFilm: FilmDataType | [],
  selectedGenre: string,
  visibleFilms: number,
  fetchError: string | null
};

const initialeState: initialStateType = {
  authorizationStatus: AuthorizationValue.Unknown,
  userData: null,
  isPrimaryLoadData: false,
  filmsData: [],
  promoFilm: [],
  selectedGenre: '',
  visibleFilms: 0,
  fetchError: null,
};

const commonReducer = createReducer(initialeState, (builder) => {
  builder
    .addCase(setAuthStatusAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserDataAction, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(deleteUserDataAction, (state) => {
      state.userData = null;
    })
    .addCase(setFilmsDataAction, (state, action) => {
      state.isPrimaryLoadData = true;
      state.filmsData = action.payload;
    })
    .addCase(setPromoFilmDataAction, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setGenresStateAction, (state, action) => {
      state.selectedGenre = action.payload;
    })
    .addCase(setInitialVisibleFilmsState, (state) => {
      state.visibleFilms = VISIBLE_FILMS_STEP_COUNT;
    })
    .addCase(setIncVisibleFilmsState, (state) => {
      state.visibleFilms += VISIBLE_FILMS_STEP_COUNT;
    })
    .addCase(setFetchErrorAction, (state, action) => {
      state.fetchError = action.payload;
    });
});

export default commonReducer;
