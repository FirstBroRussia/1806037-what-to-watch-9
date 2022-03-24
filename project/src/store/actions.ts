import {createAction} from '@reduxjs/toolkit';
import {FiltersHash} from '../components/utils/const';

const INITIAL_MAIN_FILMS_DATA = 'INITIAL_MAIN_FILMS_DATA';
const INITIAL_PROMO_FILM_DATA = 'INITIAL_PROMO_FILM_DATA';

const INITIAL_VISIBLE_FILMS = 'INITIAL_VISIBLE_FILMS';
const INC_VISIBLE_FILMS = 'INC_VISIBLE_MOVIES';


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


export {
  setFilmsDataAction,
  setPromoFilmDataAction,

  setGenresStateAction,
  setInitialVisibleFilmsState,
  setIncVisibleFilmsState
};
