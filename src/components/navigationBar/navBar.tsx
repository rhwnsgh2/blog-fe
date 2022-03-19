import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { SideBarData } from './navBarData';

export function NavigationBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <FaIcons.FaBars onClick={showSidebar} />
      {sidebar ? SideBarList() : null}
    </div>
  );
}

export function SideBarList() {
  const sideBarData = SideBarData.slice();
  const sideBar = sideBarData.map((data) => {
    return <div key={data.title}>{data.title}</div>;
  });
  return sideBar;
}

class SideBar {
  private _title: string;

  private _path: string;

  constructor(title: string, path: string) {
    this._title = title;
    this._path = path;
  }

  public get title(): string {
    return this._title;
  }

  public get path(): string {
    return this._path;
  }
}
