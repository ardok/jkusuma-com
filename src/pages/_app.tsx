import React from 'react';
import type { AppProps } from 'next/app';
import { Provider as StyletronProvider } from 'styletron-react';
import Script from 'next/script';

import { styletron } from '../common/utils/styletron';
import { useStyletron } from '../common/utils/styletron';
import { AppStateProvider } from '../common/hooks/app-state';

const ComponentWrapper = ({ children }: { children: React.ReactNode }) => {
  const [css] = useStyletron();
  return (
    <AppStateProvider>
      <div
        className={css({
          fontFamily: 'Roboto Condensed, sans-serif',
        })}>
        {children}
      </div>
    </AppStateProvider>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/*
      Putting the script here because otherwise nextjs will add some extra property into it somehow.
      https://github.com/vercel/next.js/discussions/22388#discussioncomment-2626860
      */}
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
      <StyletronProvider value={styletron}>
        <ComponentWrapper>
          <Component {...pageProps} />
        </ComponentWrapper>
      </StyletronProvider>
    </>
  );
}

export default MyApp;
