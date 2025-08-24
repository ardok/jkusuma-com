import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { cookies } from 'next/headers'; // server-only
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
  return (
    <html suppressHydrationWarning>
      {/*
        Putting the script here because otherwise nextjs will add some extra property into it somehow.
        https://github.com/vercel/next.js/discussions/22388#discussioncomment-2626860
        */}
      <GoogleAnalytics gaId="G-ETXMEFPMRQ" />
      <body>
        <InitColorSchemeScript attribute="class" />
        <ClientProvider initialThemeMode={themeModeFromCookie || 'light'}>
          <main>{children}</main>
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
