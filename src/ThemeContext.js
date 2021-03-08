import React from 'react';

export const Theme = {
  light: {
    backgroundColor: 'darkgray',
    color: 'black',
  },
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
};

const ThemeContext = React.createContext(Theme.light);

export default ThemeContext;
