import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../utils/const';
import {userSlice} from './slices/user-slice';
import {dataSlice} from './slices/data-slice';
import {otherSlice} from './slices/other-slice';

const commonReducer = combineReducers({
  [NameSpace.USER]: userSlice.reducer,
  [NameSpace.DATA]: dataSlice.reducer,
  [NameSpace.OTHER]: otherSlice.reducer,
});

export default commonReducer;
