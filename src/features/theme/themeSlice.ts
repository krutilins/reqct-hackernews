import { createSlice } from '@reduxjs/toolkit';
import { themes } from '../../context/themes';

const { dark, light } = themes;

export const themeSlice = createSlice({
  initialState: dark,
  name: 'theme',
  reducers: {
    setTheme: (_, action) => action.payload,
    toggleTheme: (state) => (state.background === light.background ? dark : light),
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
