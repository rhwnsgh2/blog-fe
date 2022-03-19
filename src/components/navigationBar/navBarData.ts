import React from 'react';

export const routerData: Array<SideBarData> = [
  {
    title: 'react',
    path: '/react',
  },
  {
    title: 'flutter',
    path: '/flutter',
  },
];

export interface SideBarData {
  title: string;
  path: string;
}
