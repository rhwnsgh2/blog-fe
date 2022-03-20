import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';

import { NavigationBarContainer } from './components/navigationBar/navBar';
import { RouteContainer } from './routes/router';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <NavigationBarContainer />
      <RouteContainer />
    </BrowserRouter>
  );
}

export default App;
