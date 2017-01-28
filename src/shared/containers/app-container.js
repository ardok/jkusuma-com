import React, {PropTypes} from 'react';
import {StyleRoot} from 'radium';

const AppContainer = ({children}) => (
  <StyleRoot>
    <div>
      {children}
    </div>
  </StyleRoot>
);

AppContainer.propTypes = {
  children: PropTypes.any,
};

export default AppContainer;
