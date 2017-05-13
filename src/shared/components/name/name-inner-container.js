import React from 'react';
import PropTypes from 'prop-types';

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
  children: PropTypes.node,
};

NameInnerContainer.defaultProps = {
  children: null,
};

export default configuredRadium(NameInnerContainer);
