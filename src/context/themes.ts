import React from 'react';

export const themes = {
  light: {
    color: 'black',
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    color: 'white',
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;
