import {createReducer} from '@reduxjs/toolkit';
import {VISIBLE_FILMS_STEP_COUNT} from '../components/utils/const';
import {
  setGenresStateAction,
  setInitialVisibleFilmsState,
  setIncVisibleFilmsState
} from './actions';

type initialStateType = {
  selectedGenre: string,
  visibleFilms: number
};

const initialeState: initialStateType = {
  selectedGenre: '',
  visibleFilms: 0,
};

const commonReducer = createReducer(initialeState, (builder) => {
  builder
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
