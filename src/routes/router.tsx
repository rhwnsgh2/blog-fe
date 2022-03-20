import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerData } from '../components/navigationBar/navBarData';

export const RouteContainer = (): JSX.Element => {
  return <Routes>{RouteElement()}</Routes>;
};

function RouteElement(): JSX.Element[] {
  const ret = routerData.map((item) => {
    return <Route key={item.title} path={item.path} element={item.element} />;
  });
  return ret;
}
