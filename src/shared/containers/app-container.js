import React from 'react';
import PropTypes from 'prop-types';
import {StyleRoot} from 'radium';

const AppContainer = ({children}) => (
  <StyleRoot>
    <div>
      {children}
    </div>
  </StyleRoot>
);

AppContainer.propTypes = {
  children: PropTypes.node,
};

AppContainer.defaultProps = {
  children: null,
};

export default AppContainer;
