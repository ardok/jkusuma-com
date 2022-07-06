import React from 'react';
import type { AppProps } from 'next/app';
import { Provider as StyletronProvider } from 'styletron-react';

import { styletron } from '../common/utils/styletron';
import { useStyletron } from '../common/utils/styletron';

// const STAR_STYLE = {
//   '-webkit-box-sizing':'border-box',
//   '-moz-box-sizing':'border-box',
//   boxSizing:'border-box',
// }

const ComponentWrapper = ({ children }: { children: React.ReactNode }) => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        fontFamily: 'Roboto Condensed, sans-serif',
        // '*': STAR_STYLE,
        // '*:after': STAR_STYLE,
        // '*:before':  STAR_STYLE,
      })}>
      {children}
    </div>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyletronProvider value={styletron}>
        <ComponentWrapper>
          <Component {...pageProps} />
        </ComponentWrapper>
      </StyletronProvider>
    </>
  );
}

export default MyApp;
