import {createReducer} from '@reduxjs/toolkit';
import {
  setGenresStateAction
} from './actions';

type initialStateType = {
  selectedGenre: string
};

const initialeState: initialStateType = {
  selectedGenre: '',
};

const updateStore = createReducer(initialeState, (builder) => {
  builder
    .addCase(setGenresStateAction, (state, action) => {
      state.selectedGenre = action.payload;
    });
});

export default updateStore;
