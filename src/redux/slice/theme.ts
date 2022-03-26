import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DefaultTheme } from 'styled-components';
import { theme } from '../../styles/theme';

export const mainTheme = createSlice({
  name: 'mainTheme',
  initialState: theme.lightTheme,
  reducers: {
    changeTheme(state, action: PayloadAction<DefaultTheme>) {
      console.log(action);
      return action.payload;
    },
  },
});

export const { changeTheme } = mainTheme.actions;
export default mainTheme.reducer;
