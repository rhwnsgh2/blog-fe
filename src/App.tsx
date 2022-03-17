import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './components/navBar';
import { BrowserRouter } from 'react-router-dom';

function App(): JSX.Element{
  return (
    <BrowserRouter>
      <NavigationBar/>
    </BrowserRouter>
      
  );
}

export default App;
