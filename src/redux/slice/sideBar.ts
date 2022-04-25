import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Home } from '../../pages/home';
import { ReactPage } from '../../pages/react';
import { FlutterPage } from '../../pages/flutter';

export interface SideBarData {
  title: string;
  path: string;
  element?: JSX.Element | null;
}

const routerData: Array<SideBarData> = [
  {
    title: 'home',
    path: '/',
    element: Home(),
  },
  {
    title: 'react',
    path: '/react',
    element: ReactPage(),
  },
  {
    title: 'flutter',
    path: '/flutter',
    element: FlutterPage(),
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
