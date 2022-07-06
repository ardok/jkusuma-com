import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

// Looks like we cannot use nextjs/script in `_document.js`
export default function Document() {
  return (
    <Html>
      <Head />
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
