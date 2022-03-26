import {createReducer} from '@reduxjs/toolkit';
import {VISIBLE_FILMS_STEP_COUNT, AuthorizationValue} from '../utils/const';
import {FilmDataType} from '../types/types';
import {
  setAuthStatusAction,
  setUserDataAction,
  deleteUserDataAction,
  setFilmsDataAction,
  setPromoFilmDataAction,
  setFilmIdDataAction,
  setFilmIdCommentsDataAction,

  setGenresStateAction,
  setInitialVisibleFilmsState,
  setIncVisibleFilmsState,
  setSimilarFilmsDataAction,
  setFetchErrorAction,
  setIsFailPostCommentAction
} from './actions';

type initialStateType = {
  authorizationStatus: string,
  userData: any,
  isPrimaryLoadData: boolean,
  filmsData: FilmDataType[] | [],
  promoFilm: FilmDataType | [],
  idFilmData: FilmDataType | null,
  idFilmCommentsData: [] | null,
  similarFilmsData: [] | null,
  selectedGenre: string,
  visibleFilms: number,
  fetchError: string | null,
  isFailPostComment: boolean
};

const initialeState: initialStateType = {
  authorizationStatus: AuthorizationValue.Unknown,
  userData: null,
  isPrimaryLoadData: false,
  filmsData: [],
  promoFilm: [],
  idFilmData: null,
  idFilmCommentsData: null,
  similarFilmsData: null,
  selectedGenre: '',
  visibleFilms: 0,
  fetchError: null,
  isFailPostComment: false,
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
    .addCase(setFilmIdDataAction, (state, action) => {
      state.idFilmData = action.payload;
    })
    .addCase(setFilmIdCommentsDataAction, (state, action) => {
      state.idFilmCommentsData = action.payload;
    })
    .addCase(setSimilarFilmsDataAction, (state, action) => {
      state.similarFilmsData = action.payload;
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
    })
    .addCase(setIsFailPostCommentAction, (state, action) => {
      state.isFailPostComment = action.payload;
    });
});

export default commonReducer;
