import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { theme } from '../src/styles/theme';
import { GlobalStyle } from '../src/styles/global-style';
import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

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
    const [storyTheme, setStoryTheme] = useState<DefaultTheme>(theme.darkTheme);
    return (
      <ThemeProvider theme={theme.darkTheme}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ThemeProvider>
    );
  },
];
