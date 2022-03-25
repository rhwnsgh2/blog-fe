import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { RouteContainer } from './routes/router';
import { MainLayout } from './layouts/mainLayout';
import { GlobalStyle } from './styles/global-style';
import { theme } from './styles/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />

        <MainLayout />
        <RouteContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
