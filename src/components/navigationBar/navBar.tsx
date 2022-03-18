import React from 'react';
import { SideBarData } from './navBarData';

export function NavigationBar() {
  const sideBarData = { ...SideBarData };
  sideBarData.map((data) => {
    return <div>{data.title}</div>;
  });
  return <div>{sideBarData}</div>;
}
