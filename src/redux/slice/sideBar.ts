import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const sideBar = createSlice({
  name: 'sideBar',
  initialState: false,
  reducers: {
    changeView(state) {
      return !state;
    },
  },
});

export const { changeView } = sideBar.actions;
export default sideBar.reducer;
