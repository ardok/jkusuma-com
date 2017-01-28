import React, {PropTypes} from 'react';

import {configuredRadium} from '../../helpers/styles';

const NameInnerContainer = ({children, ...otherProps}) => {
  const styles = {
    innerContainer: {
      position: 'relative',
    },
  };
  return (
    <div style={styles.innerContainer} {...otherProps}>
      {children}
    </div>
  );
};

NameInnerContainer.propTypes = {
  children: PropTypes.any,
};

export default configuredRadium(NameInnerContainer);
