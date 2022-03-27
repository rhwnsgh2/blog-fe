import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { GlobalStyle } from '../src/styles/global-style';
import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { store } from './../src/redux/store';
import { ReducerType } from '../src/redux/rootReducer';
import { theme } from '../src/styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <Provider store={store}>
        <ThemeContainer Story={Story}/>
      </Provider>
    );
  },
];

const ThemeContainer = ({Story})=>{
  const mainTheme = useSelector<ReducerType, DefaultTheme>(store => store.themeReducer);
  return(<ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <Story />
    </BrowserRouter>
  </ThemeProvider>);
}