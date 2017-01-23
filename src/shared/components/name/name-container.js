import React, {Component} from 'react';

import {ConfiguredRadium} from '../../helpers/styles';

const NameContainer = ({children, ...otherProps}) => {
  const styles = {
    container: {
      position: 'absolute',
      top: 'calc(50% - 40px)',
      left: 'calc(50% - 110px)',
      lineHeight: '40px'
    }
  };
  return (
    <div style={styles.container} {...otherProps}>
      {children}
    </div>
  );
};

export default ConfiguredRadium(NameContainer);
