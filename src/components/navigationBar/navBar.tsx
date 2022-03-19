import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { routerData, SideBarData } from './navBarData';
import { NavigationBarView } from './navBarView';

export function NavigationBarContainer() {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);

  const sideBarData = sidebar ? SideBarList(routerData) : null;
  return <NavigationBarView showSideBar={showSideBar} sideBarData={sideBarData} />;
}

export function SideBarList(sideBarData: Array<SideBarData>) {
  const sideBar = sideBarData.map((data) => {
    const item = new SideBar(data);
    return item;
  });
  return sideBar;
}

export class SideBar {
  private _title: string;

  private _path: string;

  constructor(sideBarData: SideBarData) {
    this._title = sideBarData.title;
    this._path = sideBarData.path;
  }

  public get title(): string {
    return this._title;
  }

  public get path(): string {
    return this._path;
  }
}
