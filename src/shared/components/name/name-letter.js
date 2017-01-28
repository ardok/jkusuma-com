import React, {PropTypes} from 'react';
import deepExtend from 'deep-extend';

import {configuredRadium} from '../../helpers/styles';

const NameLetter = (props) => {
  const {
    children,
    style,
    ...otherProps,
  } = props;
  const styles = {
    nameLetter: deepExtend({
      display: 'inline-block',
      cursor: 'default',
    }, style),
  };
  return (
    <div style={styles.nameLetter} {...otherProps}>
      {children}
    </div>
  );
};

NameLetter.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
};

export default configuredRadium(NameLetter);
