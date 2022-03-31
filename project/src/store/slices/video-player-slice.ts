import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/const';

type InitialVideoPlayerSliceStateType = {
  isCurrentVideoPlayerState: string | null,
  durationVideo: number,
}

const initialVideoPlayerSliceState: InitialVideoPlayerSliceStateType = {
  isCurrentVideoPlayerState: null,
  durationVideo: 0,
};

export const videoPlayerSlice = createSlice({
  name: NameSpace.PLAYER,
  initialState: initialVideoPlayerSliceState,
  reducers: {
    setCurrentVideoPlayerStateAction: (state, action) => {
      state.isCurrentVideoPlayerState = action.payload;
    },
    setDurationVideoAction: (state, action) => {
      state.durationVideo = action.payload;
    },
  },
});

export const {setCurrentVideoPlayerStateAction, setDurationVideoAction} = videoPlayerSlice.actions;
