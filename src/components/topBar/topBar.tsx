import React, { FunctionComponent, ReactElement } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { routerData, SideBarData } from '../navigationBar/navBarData';
import { NavigationBarContainer } from '../navigationBar/navBar';

const Topbar = styled.div`
  display: flex;
  height: 8rem;
  background-color: ${(props) => props.theme.mainBackground};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TopBarContainer = (): React.ReactElement => {
  return (
    <Topbar>
      <NavigationBarContainer />
      <TopBarTitle />
    </Topbar>
  );
};

const LinkText = styled(Link)`
  flex: 1;
  color: ${(props) => props.theme.title};
  text-align: center;
  text-decoration: none;
  font-size: 2rem;
`;

const TopBarTitle = (): ReactElement | null => {
  const routeObj: SideBarData | null = routerData.find((item) => item.title === 'home') || null;
  const ret = routeObj ? <LinkText to={routeObj.path}> TopBar </LinkText> : null;
  return ret;
};
