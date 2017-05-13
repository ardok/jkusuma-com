import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {clickAnimLetter, clearClickLetterAnimCount} from '../actions/name';

import IconsWrapper from '../components/icon/icons-wrapper';
import NameMine from '../components/name/name-mine';
import NameClickCount from '../components/name/name-click-count';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  onLetterClick: () => {
    dispatch(clickAnimLetter());
  },
  clearClickLetterAnimCount: () => {
    dispatch(clearClickLetterAnimCount());
  },
});

const IndexContainer = (props) => {
  const {
    onLetterClick,
    clearClickLetterAnimCount: clearClickCount,
    nameState: {
      clickLetterAnimCount,
    },
  } = props;

  const nameClickCountProps = {
    clickLetterAnimCount,
    clearClickCount,
  };

  const nameMineProps = {
    onLetterClick,
    clickLetterAnimCount,
  };

  return (
    <div>
      <NameClickCount {...nameClickCountProps} />
      <IconsWrapper />
      <NameMine {...nameMineProps} />
    </div>
  );
};

IndexContainer.propTypes = {
  onLetterClick: PropTypes.func,
  clearClickLetterAnimCount: PropTypes.func,
  nameState: PropTypes.shape(),
};

IndexContainer.defaultProps = {
  onLetterClick: () => {},
  clearClickLetterAnimCount: () => {},
  nameState: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IndexContainer);
