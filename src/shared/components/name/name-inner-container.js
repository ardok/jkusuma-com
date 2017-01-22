import React, {Component} from 'react';

import {ConfiguredRadium} from '../../helpers/styles';

const NameInnerContainer = ({children, ...otherProps}) => {
  const styles = {
    innerContainer: {
      position: 'relative'
    }
  };
  return (
    <div style={styles.innerContainer} {...otherProps}>
      {children}
    </div>
  );
};

export default ConfiguredRadium(NameInnerContainer);
