import React, {PropTypes} from 'react';

import {configuredRadium, media} from '../../helpers/styles';

const NameContainer = ({children, ...otherProps}) => {
  const styles = {
    container: {
      position: 'absolute',
      top: 'calc(50% - 40px)',
      left: 'calc(50% - 110px)',
      lineHeight: '40px',
      [media.portable]: {
        lineHeight: '20px',
        left: 'calc(50% - 52px)',
      },
    },
  };
  return (
    <div style={styles.container} {...otherProps}>
      {children}
    </div>
  );
};

NameContainer.propTypes = {
  children: PropTypes.any,
};

export default configuredRadium(NameContainer);
