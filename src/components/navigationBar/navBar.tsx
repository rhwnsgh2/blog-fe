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
