/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import randomNumber from 'random-number';

import NameContainer from './name-container';
import NameInnerContainer from './name-inner-container';
import NameLetter from './name-letter';

function getRandomInt(min, max) {
  return randomNumber({
    min,
    max,
    integer: true,
  });
}

const SHAKING_LETTERS = ['U', 'S', 'U', 'M'];

function getShakingKeyframe() {
  return Radium.keyframes({
    '0%': {
      transform: 'translateY(0) rotate(0deg)',
    },
    '50%': {
      transform: `translateY(${getRandomInt(-24, -8)}px) rotate(${getRandomInt(-50, 50)}deg)`,
    },
    '100%': {
      transform: 'translateY(0) rotate(0deg)',
    },
  });
}

function getShakingAnimStyle() {
  return {
    animationName: getShakingKeyframe(),
    animationDuration: '0.25s',
    animationFillMode: 'forwards',
    animationDelay: '1.4s',
  };
}

function getShakingLetters(props) {
  const {onLetterClick, clickLetterAnimCount} = props;
  return SHAKING_LETTERS.map((letter, idx) => (
    <NameLetter
      key={`${letter}-${idx}`}
      style={clickLetterAnimCount === 0 ? getShakingAnimStyle() : {}}
      onClick={onLetterClick}
    >
      {letter}
    </NameLetter>
  ));
}

const NameMine = (props) => {
  const {
    onLetterClick,
  } = props;
  return (
    <NameContainer>
      <NameInnerContainer>
        <div className="name__last">
          <NameLetter className="name--k" onClick={onLetterClick}>K</NameLetter>
          {getShakingLetters(props)}
          <NameLetter className="name--a" onClick={onLetterClick}>A</NameLetter>
        </div>
        <div className="name__first">
          ARDO
        </div>
      </NameInnerContainer>
    </NameContainer>
  );
};

NameMine.propTypes = {
  onLetterClick: PropTypes.func,
  clickLetterAnimCount: PropTypes.number,
};

NameMine.defaultProps = {
  onLetterClick: () => {},
  clickLetterAnimCount: 0,
};

export default NameMine;
