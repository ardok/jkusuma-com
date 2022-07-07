import Document, { Html, Head, Main, NextScript } from 'next/document';
import type { DocumentContext } from 'next/document';
import React from 'react';
import { Server, Sheet } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';

import { styletron } from '../common/utils/styletron';

// https://github.com/vercel/next.js/blob/canary/examples/with-styletron/pages/_document.js
class DocumentWrapper extends Document<{ stylesheets: Sheet[] }> {
  static async getInitialProps(context: DocumentContext) {
    const renderPage = () =>
      context.renderPage({
        enhanceApp: (App) => (props) =>
          (
            <StyletronProvider value={styletron}>
              <App {...props} />
            </StyletronProvider>
          ),
      });

    const initialProps = await Document.getInitialProps({
      ...context,
      renderPage,
    });

    // We are definitely in Node here (getInitialProps) according to Next.js documentation
    const stylesheets = (styletron as Server).getStylesheets() || [];

    return { ...initialProps, stylesheets };
  }

  render() {
    // Looks like we cannot use nextjs/script in `_document.js`
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* eslint-disable-next-line @next/next/next-script-for-ga */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-ETXMEFPMRQ"
          />
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
      </Html>
    );
  }
}

export default DocumentWrapper;
