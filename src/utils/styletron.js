// @flow
import React from 'react';
import { createStyled } from 'styletron-react';
import { driver, getInitialStyle } from 'styletron-standard';

const BLUE = '#2196f3';
const INDIGO = '#3f51b5';

const THEME = {
  colors: {
    // https://material-ui.com/customization/color/
    // Primary is blue
    blue: BLUE,
    blue500: BLUE,
    blue800: '#1565c0',

    indigo: INDIGO,
    indigo500: INDIGO,
    indigo800: '#283593',
  },
};

const { Provider, Consumer } = React.createContext<any>();

const StyletronThemeProvider = ({ children }: { children: React$Node }) => (
  <Provider value={THEME}>{children}</Provider>
);

const wrapper = (StyledComponent) => {
  return function withThemeHOC(props) {
    return (
      <Consumer>
        {(theme) => <StyledComponent {...props} $theme={theme} />}
      </Consumer>
    );
  };
};

const kStyled: any = createStyled({
  wrapper,
  getInitialStyle,
  driver,
});

// We do this because we want to override only `styled`
export * from 'styletron-react';
export { StyletronThemeProvider, kStyled as styled };
