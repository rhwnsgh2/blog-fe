import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
