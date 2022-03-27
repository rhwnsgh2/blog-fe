import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { RouteContainer } from './routes/router';
import { MainLayout } from './layouts/mainLayout';
import { GlobalStyle } from './styles/global-style';
import { ReducerType } from './redux/rootReducer';

function App(): JSX.Element {
  const theme = useSelector<ReducerType, DefaultTheme>((state) => state.themeReducer);
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
