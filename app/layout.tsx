import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { useColorScheme } from '@mui/material/styles';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { cookies } from 'next/headers'; // server-only
// import { headers } from 'next/headers';
import React, { ReactNode } from 'react';

import { ClientProvider } from '../src/providers/ClientProvider';
import type { ThemeMode } from '../src/theme';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Ardo Kusuma',
    description: 'Personal site',
    icons: {
      shortcut: '/favicon.ico',
    },
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

async function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const themeModeFromCookie = cookieStore.get('theme')?.value as
    | ThemeMode
    | undefined;

  const initialCookies: Record<string, string> = {};
  // Convert cookie store to plain object
  cookieStore.getAll().forEach((c) => {
    initialCookies[c.name] = c.value;
  });

  // const pathname = (await headers()).get('pathname');

  return (
    <html
      suppressHydrationWarning
      style={{
        // ...(pathname === '/login' ? { height: '100%' } : {}),
        margin: 0,
      }}
      {...(themeModeFromCookie === 'dark'
        ? { 'data-dark': '' }
        : { 'data-light': '' })}>
      {/*
        Putting the script here because otherwise nextjs will add some extra property into it somehow.
        https://github.com/vercel/next.js/discussions/22388#discussioncomment-2626860
        */}
      <GoogleAnalytics gaId="G-ETXMEFPMRQ" />
      <body style={{ height: 'inherit' }}>
        <InitColorSchemeScript attribute="data" />
        <ClientProvider
          initialThemeMode={themeModeFromCookie || 'light'}
          initialCookies={initialCookies}>
          <main
            style={{
              height: 'inherit',
            }}>
            {children}
          </main>
        </ClientProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'G-ETXMEFPMRQ');
          `,
          }}
        />
      </body>
    </html>
  );
}

export default RootLayout;
