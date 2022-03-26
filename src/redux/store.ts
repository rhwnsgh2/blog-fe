import { configureStore } from '@reduxjs/toolkit';
import reducer from './rootReducer';

export const store = configureStore({
  reducer: {
    reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
