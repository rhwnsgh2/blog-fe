import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const sideBar = createSlice({
  name: 'sideBar',
  initialState: false,
  reducers: {
    changeViewSideBar(state) {
      return !state;
    },
  },
});

export const { changeViewSideBar } = sideBar.actions;
export default sideBar.reducer;
