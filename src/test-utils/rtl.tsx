import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

import { ThemeProvider } from '../common/utils/styletron';

const engine = new Styletron();

const StyletronWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>
    <StyletronProvider value={engine}>{children}</StyletronProvider>
  </ThemeProvider>
);

// `options` to be determined later, if needed
function render(ui: any, options?: any) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <StyletronWrapper>{children}</StyletronWrapper>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

// https://testing-library.com/docs/dom-testing-library/api-queries
// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
