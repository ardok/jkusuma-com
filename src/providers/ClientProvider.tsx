'use client';
import { CookiesProvider } from 'react-cookie';

import { LayoutWrapper } from '../common/components/LayoutWrapper';
import { type ThemeMode, ThemeProvider } from '../theme';

export const ClientProvider = ({
  initialThemeMode,
  children,
}: React.PropsWithChildren<{ initialThemeMode: ThemeMode }>) => {
  return (
    <CookiesProvider>
      <ThemeProvider initialThemeMode={initialThemeMode}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </ThemeProvider>
    </CookiesProvider>
  );
};
