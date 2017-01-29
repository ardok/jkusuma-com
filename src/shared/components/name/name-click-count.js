import React, {PropTypes} from 'react';

import {configuredRadium} from '../../helpers/styles';

const NameClickCount = (props) => {
  const {clickLetterAnimCount} = props;
  if (typeof clickLetterAnimCount !== 'number') {
    return null;
  }

  const styles = {
    container: {
      position: 'absolute',
      right: '25px',
      textAlign: 'center',
    },
    clickText: {
      fontSize: '10px',
    },
  };

  return (
    <div className="name-click-count__container" style={styles.container}>
      <div style={styles.clickText}>Click</div>
      <div className="name-click-count__count">{clickLetterAnimCount}</div>
    </div>
  );
};

NameClickCount.propTypes = {
  clickLetterAnimCount: PropTypes.number,
};

NameClickCount.defaultProps = {
};

export default configuredRadium(NameClickCount);
