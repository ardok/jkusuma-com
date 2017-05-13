/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import {configuredRadium} from '../../helpers/styles';
import gaHelper from '../../helpers/ga';

const NameClickCount = (props) => {
  const {clickLetterAnimCount, clearClickCount} = props;
  if (typeof clickLetterAnimCount !== 'number') {
    return null;
  }

  const styles = {
    container: {
      position: 'absolute',
      right: '25px',
      textAlign: 'center',
      cursor: 'default',
    },
  };

  return (
    <div
      className="name-click-count__container"
      style={styles.container}
      onClick={() => {
        gaHelper.clickAnimLetterCount();
        clearClickCount();
      }}
    >
      <div className="name-click-count__count">{clickLetterAnimCount}</div>
    </div>
  );
};

NameClickCount.propTypes = {
  clickLetterAnimCount: PropTypes.number,
  clearClickCount: PropTypes.func.isRequired,
};

NameClickCount.defaultProps = {
  clickLetterAnimCount: 0,
};

export default configuredRadium(NameClickCount);
