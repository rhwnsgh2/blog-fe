import React from 'react';
import { SideBarData } from './navBarData';

export function NavigationBar() {
  return <div>{SideBarList()}</div>;
}

export function SideBarList() {
  const sideBarData = SideBarData.slice();
  const sideBar = sideBarData.map((data) => {
    return <div key={data.title}>{data.title}</div>;
  });
  return sideBar;
}
