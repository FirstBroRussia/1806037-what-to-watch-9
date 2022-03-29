import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationValue, NameSpace} from '../../utils/const';

type InitialUserSliceStateType = {
  authorizationStatus: string,
  userData: any,
}

const initialUserSliceState: InitialUserSliceStateType = {
  authorizationStatus: AuthorizationValue.Unknown,
  userData: null,
};

export const userSlice = createSlice({
  name: NameSpace.USER,
  initialState: initialUserSliceState,
  reducers: {
    setAuthStatusAction: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    setUserDataAction: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const {setAuthStatusAction, setUserDataAction} = userSlice.actions;
