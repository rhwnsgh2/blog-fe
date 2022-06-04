import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { RouteContainer } from './routes/router';
import { GlobalStyle } from './styles/global-style';
import { ReducerType } from './redux/rootReducer';
import MainPage from './pages/mainPage';
import { ReactPage } from './pages/reactPage';

function App(): JSX.Element {
  const theme = useSelector<ReducerType, DefaultTheme>((state) => state.themeReducer);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <ReactPage />
        <RouteContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
