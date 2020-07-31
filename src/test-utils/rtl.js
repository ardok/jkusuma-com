// @flow
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

import { StyletronThemeProvider } from '../utils/styletron';

const engine = new Styletron();

export const StyletronWrapper = ({ children }: { children: React$Node }) => (
  <StyletronThemeProvider>
    <StyletronProvider value={engine}>{children}</StyletronProvider>
  </StyletronThemeProvider>
);

// `options` to be determined later, if needed
function render(ui: React$Element<*>, options?: ?any) {
  function Wrapper({ children }) {
    return <StyletronWrapper>{children}</StyletronWrapper>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

// https://testing-library.com/docs/dom-testing-library/api-queries
// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
