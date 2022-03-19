import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { SideBar } from './navBar';

type Props = {
  showSideBar: () => void;
  sideBarData: Array<SideBar> | null;
};
export const NavigationBarView: React.FC<Props> = ({ showSideBar, sideBarData }) => {
  return (
    <div>
      <FaIcons.FaBars onClick={showSideBar} />
      {sideBarData ? SideBarView(sideBarData) : null}
    </div>
  );
};

const SideBarView = (data: Array<SideBar>) => {
  const ret = data.map((item) => {
    return <div key={item.title}>{item.title}</div>;
  });
  return ret;
};
