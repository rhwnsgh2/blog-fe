import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { NavigationBar } from './components/navigationBar/navBar';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <NavigationBar />
    </BrowserRouter>
  );
}

export default App;
