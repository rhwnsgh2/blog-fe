import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    themes: themeReducer,
  },
});
