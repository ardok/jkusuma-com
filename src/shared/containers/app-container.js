import React from 'react';
import PropTypes from 'prop-types';
import {StyleRoot} from 'radium';

const AppContainer = ({children}) => (
  <StyleRoot>
    <div>
      {children}
    </div>
    <div
      style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        fontSize: '9px',
      }}
    >
      This website is using Google Analytics
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
