import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SideBar } from './navBar';

type Props = {
  showSideBar: () => void;
  sideBarData: Array<SideBar> | null;
};

const NavigationBar = styled.div`
  flex: 1;
  justify-self: right;
  align-items: right;
  margin-left: 1rem;
`;

const Icon = styled(FaIcons.FaBars)`
  height: 2rem;
  width: 2rem;
`;

export const NavigationBarView: React.FC<Props> = ({ showSideBar, sideBarData }) => {
  return (
    <NavigationBar>
      <Icon onClick={showSideBar} />
      {sideBarData ? SideBarView(sideBarData) : null}
    </NavigationBar>
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
