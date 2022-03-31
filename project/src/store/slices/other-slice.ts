import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, VISIBLE_FILMS_STEP_COUNT} from '../../utils/const';

type InitialOtherSliceStateType = {
  selectedGenre: string,
  visibleFilms: number,
  fetchError: string | null,
  isFailPostComment: boolean,
}

const initialOtherSliceState: InitialOtherSliceStateType = {
  selectedGenre: '',
  visibleFilms: 0,
  fetchError: null,
  isFailPostComment: false,
};

export const otherSlice = createSlice({
  name: NameSpace.OTHER,
  initialState: initialOtherSliceState,
  reducers: {
    setGenresStateAction: (state, action) => {
      state.selectedGenre = action.payload;
    },
    setInitialVisibleFilmsState: (state) => {
      state.visibleFilms = VISIBLE_FILMS_STEP_COUNT;
    },
    setIncVisibleFilmsState: (state) => {
      state.visibleFilms += VISIBLE_FILMS_STEP_COUNT;
    },
    setFetchErrorAction: (state, action) => {
      state.fetchError = action.payload;
    },
    setIsFailPostCommentAction: (state, action) => {
      state.isFailPostComment = action.payload;
    },
  },
});

export const {setGenresStateAction, setInitialVisibleFilmsState, setIncVisibleFilmsState, setFetchErrorAction, setIsFailPostCommentAction} = otherSlice.actions;
