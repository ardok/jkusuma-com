import React, { useContext } from 'react';
import { ThemeT } from './types';

const DEFAULT_THEME = {
  colors: {
    // https://mui.com/material-ui/customization/color/
    grey100: '#f5f5f5',

    blue800: '#1565c0',
  },
};

const ThemeContext = React.createContext(DEFAULT_THEME);

const ThemeProvider = (props: {
  value?: ThemeT;
  children: React.ReactNode;
}) => {
  const { value = DEFAULT_THEME, children } = props;
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, ThemeContext, useTheme };
