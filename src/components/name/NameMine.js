// @flow
import React from 'react';

import { NameLetter } from './NameLetter';
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledNameFirst,
  StyledNameLast,
  NAME_LETTER_OVERRIDES_A,
  NAME_LETTER_OVERRIDES_K,
} from './styles';

const MID_LETTERS = ['U', 'S', 'U', 'M'];

function getMidLetters(props) {
  const { onLetterClick } = props;
  return MID_LETTERS.map((letter, idx) => (
    <NameLetter key={`${letter}-${idx}`} onClick={onLetterClick}>
      {letter}
    </NameLetter>
  ));
}

type TProps = {
  onLetterClick: () => any,
};

const NameMine = (props: TProps) => {
  const { onLetterClick } = props;
  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <StyledNameLast>
          <NameLetter
            onClick={onLetterClick}
            overrides={NAME_LETTER_OVERRIDES_K}
          >
            K
          </NameLetter>
          {getMidLetters(props)}
          <NameLetter
            onClick={onLetterClick}
            overrides={NAME_LETTER_OVERRIDES_A}
          >
            A
          </NameLetter>
        </StyledNameLast>
        <StyledNameFirst>ARDO</StyledNameFirst>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
};

export { NameMine };
