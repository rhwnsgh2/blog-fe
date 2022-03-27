import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './slice/theme';

export const reducer = combineReducers({
  themeReducer,
});

export type ReducerType = ReturnType<typeof reducer>;
