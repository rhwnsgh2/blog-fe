import React from 'react';
import { NavigationBar } from '../components/navigationBar/naviBar';
import { TopBarContainer } from '../components/topBar/topBar';

export const MainLayout = (): JSX.Element => {
  return (
    <div>
      <TopBarContainer />
      <NavigationBar />
    </div>
  );
};
