import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const RouteContainer = (): JSX.Element => {
  return <Routes>{RouteElement()}</Routes>;
};

function RouteElement(): JSX.Element[] {
  const routerList = useSelector((state: RootState) => state.sideBar);
  const ret = routerList.map((item) => {
    return <Route key={item.title} path={item.path} />;
  });
  return ret;
}
