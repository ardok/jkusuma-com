'use client';
import { CookiesProvider } from 'react-cookie';
import Cookies from 'universal-cookie';

import { LayoutWrapper } from '../common/components/LayoutWrapper';
import { type ThemeMode, ThemeProvider } from '../theme';

export const ClientProvider = ({
  initialThemeMode,
  initialCookies,
  children,
}: React.PropsWithChildren<{
  initialThemeMode: ThemeMode;
  initialCookies: Record<string, string>;
}>) => {
  return (
    <CookiesProvider cookies={new Cookies(initialCookies)}>
      <ThemeProvider initialThemeMode={initialThemeMode}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </ThemeProvider>
    </CookiesProvider>
  );
};
