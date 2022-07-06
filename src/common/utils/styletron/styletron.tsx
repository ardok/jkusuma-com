import React from 'react';
import { Client, Server } from 'styletron-engine-atomic';
import {
  createStyled,
  useStyletron as styletronUseStyletron,
} from 'styletron-react';
import type { CSSFn, StyletronComponent } from 'styletron-react';
import { driver, getInitialStyle, StyleObject } from 'styletron-standard';

import { ThemeContext, useTheme } from './ThemeProvider';
import { ThemeT } from './types';

/*
Following baseweb:
https://github.com/uber/baseweb/blob/master/src/styles/styled.js
https://github.com/uber/baseweb/blob/master/src/styles/index.d.ts
 */

const getHydrateClass = () =>
  document.getElementsByClassName('_styletron_hydrate_');

export const styletron =
  typeof window === 'undefined'
    ? new Server()
    : new Client({
      // @ts-ignore
      hydrate: getHydrateClass(),
    });

export const useStyletron = (): [CSSFn, ThemeT] => {
  const theme = useTheme();
  const [css] = styletronUseStyletron();
  return [css, theme];
};

const wrapper = (StyledComponent: any) => {
  // eslint-disable-next-line react/display-name
  return React.forwardRef((props, ref) => (
    <ThemeContext.Consumer>
      {(theme) => {
        return <StyledComponent ref={ref} {...props} $theme={theme} />;
      }}
    </ThemeContext.Consumer>
  ));
};

// export function styled<
//   P extends object,
//   T = ThemeT,
// >(
//   component: any,
//   styledFn: StyleObject | ((props: { $theme: T } & P) => StyleObject),
// ): StyletronComponent<P> {
//   // @ts-ignore
//   return createStyled({
//     wrapper,
//     getInitialStyle,
//     driver,
//   }) as any;
// }
export const styled = createStyled({
  wrapper,
  getInitialStyle,
  driver,
}) as any;
