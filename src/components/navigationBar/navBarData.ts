import React from 'react';
import { Home } from '../../pages/home';
import { ReactPage } from '../../pages/react';
import { FlutterPage } from '../../pages/flutter';

export const routerData: Array<SideBarData> = [
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

export interface SideBarData {
  title: string;
  path: string;
  element?: JSX.Element | null;
}
