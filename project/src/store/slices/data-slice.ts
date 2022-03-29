import {createSlice} from '@reduxjs/toolkit';
import {FavoriteFilmsDataType, FilmDataType, IdFilmCommentsDataType, SimilarFilmsDataType} from '../../types/types';
import {NameSpace} from '../../utils/const';

type InitialDataSliceStateType = {
  isPrimaryLoadData: boolean,
  filmsData: FilmDataType[] | null,
  promoFilm: FilmDataType | null,
  favoriteFilmsData: FavoriteFilmsDataType,
  idFilmData: FilmDataType | null,
  idFilmCommentsData: IdFilmCommentsDataType,
  similarFilmsData: SimilarFilmsDataType,
}

const initialDataSliceState: InitialDataSliceStateType = {
  isPrimaryLoadData: false,
  filmsData: null,
  promoFilm: null,
  favoriteFilmsData: null,
  idFilmData: null,
  idFilmCommentsData: null,
  similarFilmsData: null,
};

export const dataSlice = createSlice({
  name: NameSpace.DATA,
  initialState: initialDataSliceState,
  reducers: {
    setFilmsDataAction: (state, action) => {
      state.isPrimaryLoadData = true;
      state.filmsData = action.payload;
    },
    setPromoFilmDataAction: (state, action) => {
      state.promoFilm = action.payload;
    },
    setFavoriteFilmsDataAction: (state, action) => {
      state.favoriteFilmsData = action.payload;
    },
    setFilmIdDataAction: (state, action) => {
      state.idFilmData = action.payload;
    },
    setFilmIdCommentsDataAction: (state, action) => {
      state.idFilmCommentsData = action.payload;
    },
    setSimilarFilmsDataAction: (state, action) => {
      state.similarFilmsData = action.payload;
    },
  },
});

export const {setFilmsDataAction, setPromoFilmDataAction, setFavoriteFilmsDataAction, setFilmIdDataAction, setFilmIdCommentsDataAction, setSimilarFilmsDataAction} = dataSlice.actions;
