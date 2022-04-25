import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const sideBarView = createSlice({
  name: 'sideBarView',
  initialState: { visible: false },
  reducers: {
    changeViewSideBar(state) {
      return { visible: !state.visible };
    },
  },
});

export const { changeViewSideBar } = sideBarView.actions;
export default sideBarView.reducer;
