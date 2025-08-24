import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { createContext, useCallback, useContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';

import { LayoutWrapper } from './common/components/LayoutWrapper';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export type ThemeMode = 'light' | 'dark';

const ThemeContext = createContext<{
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}>({ mode: 'light', setMode: () => {} });

export function useTheme({ mode }: { mode: ThemeMode }) {
  return useMemo(
    () =>
      createTheme({
        cssVariables: {
          colorSchemeSelector: 'data',
        },
        palette: { mode },
        typography: {
          fontFamily: roboto.style.fontFamily,
        },
      }),
    [mode]
  );
}

export function useThemeProvider() {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({
  initialThemeMode,
  children,
}: React.PropsWithChildren<{ initialThemeMode: ThemeMode }>) => {
  const [cookies, setCookie] = useCookies(['theme']);
  const mode = cookies.theme || initialThemeMode;
  const theme = useTheme({ mode });
  const setMode = useCallback(
    (mode: ThemeMode) => {
      setCookie('theme', mode, { path: '/', maxAge: 31536000 });
    },
    [setCookie]
  );
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutWrapper>{children}</LayoutWrapper>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
