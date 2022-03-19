import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
    return (
      <Link to={item.path} key={item.title}>
        {item.title}
      </Link>
    );
  });
  return ret;
};
