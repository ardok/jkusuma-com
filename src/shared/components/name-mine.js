import React from 'react';
import Radium from 'radium';
import randomNumber from 'random-number';

import NameContainer from '../components/name/name-container';
import NameInnerContainer from '../components/name/name-inner-container';
import NameLetter from '../components/name/name-letter';

function getRandomInt(min, max) {
  return randomNumber({
    min,
    max,
    integer: true,
  });
}

const SHAKING_LETTERS = ['A', 'N', 'U', 'A', 'R'];

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

function getShakingLetters() {
  return SHAKING_LETTERS.map((letter, idx) => {
    const letterStyle = getShakingAnimStyle();
    return (
      <NameLetter key={idx} style={letterStyle}>{letter}</NameLetter>
    );
  });
}

// class NameMine extends Component {
const NameMine = (props) => (
  <NameContainer>
    <NameInnerContainer>
      <div className="name__first">
        <NameLetter className="name--j">J</NameLetter>
        {getShakingLetters(props)}
        <NameLetter className="name--y">Y</NameLetter>
        <NameLetter className="name--d">D</NameLetter>
        <NameLetter className="name--o">O</NameLetter>
      </div>
      <div className="name__last">
        KUSUMA
      </div>
    </NameInnerContainer>
  </NameContainer>
);

export default NameMine;
