import {createReducer} from '@reduxjs/toolkit';
import {VISIBLE_FILMS_STEP_COUNT} from '../components/utils/const';
import { FilmDataType } from '../types/types';
import {
  setFilmsDataAction,
  setPromoFilmDataAction,

  setGenresStateAction,
  setInitialVisibleFilmsState,
  setIncVisibleFilmsState
} from './actions';

type initialStateType = {
  isPrimaryLoadData: boolean,
  filmsData: [],
  promoFilm: FilmDataType | [],
  selectedGenre: string,
  visibleFilms: number
};

const initialeState: initialStateType = {
  isPrimaryLoadData: false,
  filmsData: [],
  promoFilm: [],
  selectedGenre: '',
  visibleFilms: 0,
};

const commonReducer = createReducer(initialeState, (builder) => {
  builder
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
    });
});

export default commonReducer;
