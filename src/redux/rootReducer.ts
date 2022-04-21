import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './slice/theme';
import sideBar from './slice/sideBar';

export const reducer = combineReducers({
  themeReducer,
  sideBar,
});

export type ReducerType = ReturnType<typeof reducer>;
