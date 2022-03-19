import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { routerData } from './components/navigationBar/navBarData';
import { NavigationBarContainer } from './components/navigationBar/navBar';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <NavigationBarContainer />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/react" element={<Home />} /> */}
        {RouteElement()}
      </Routes>
    </BrowserRouter>
  );
}

function RouteElement(): JSX.Element[] {
  const ret = routerData.map((item) => {
    return <Route key={item.title} path={item.path} element={item.element} />;
  });
  return ret;
}
export default App;
