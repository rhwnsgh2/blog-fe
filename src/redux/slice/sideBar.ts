import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SideBarData {
  title: string;
  path: string;
  element?: JSX.Element | null;
}

const routerData: Array<SideBarData> = [
  {
    title: 'home',
    path: '/',
  },
  {
    title: 'react',
    path: '/react',
  },
  {
    title: 'flutter',
    path: '/flutter',
  },
];

export const sideBar = createSlice({
  name: 'sideBar',
  initialState: routerData,
  reducers: {
    addSideBarMenu(state, action: PayloadAction<SideBarData>) {
      return [...state, action.payload];
    },
  },
});

export const { addSideBarMenu } = sideBar.actions;
export default sideBar.reducer;
