import { render as rtlRender } from '@testing-library/react';
import React from 'react';

// `options` to be determined later, if needed
function render(ui: any, options?: any) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return children;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

// https://testing-library.com/docs/dom-testing-library/api-queries
// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
