import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './slice/theme';
import sideBarView from './slice/sideBarView';
import sideBar from './slice/sideBar';

export const reducer = combineReducers({
  themeReducer,
  sideBarView,
  sideBar,
});

export type ReducerType = ReturnType<typeof reducer>;
