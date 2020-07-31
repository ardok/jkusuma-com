// @flow
import React, { useCallback, useMemo, useState } from 'react';

import { NameLetter } from './NameLetter';
import {
  StyledWrapper,
  StyledInnerWrapper,
  StyledNameFirst,
  StyledNameLast,
  NAME_LETTER_OVERRIDES_A,
  NAME_LETTER_OVERRIDES_K,
} from './styles';
import { dispatchNameClick, useAppState } from '../../utils/app-state';
import { styled } from '../../utils/styletron';

const MID_LETTERS = ['U', 'S', 'U', 'M'];

const StyledClickMyName = styled('div', {
  position: 'absolute',
  top: '-10px',
  right: '-150px',
  fontSize: '10px',
});

function getMidLetters(props: { onLetterClick: () => any }) {
  const { onLetterClick } = props;
  return MID_LETTERS.map((letter, idx) => (
    <NameLetter key={`${letter}-${idx}`} onClick={onLetterClick}>
      {letter}
    </NameLetter>
  ));
}

const NameMine = () => {
  const [, dispatch] = useAppState();
  const [clickCount, setClickCount] = useState(0);

  const onLetterClick = useCallback(() => {
    setClickCount((c) => c + 1);
    dispatchNameClick(dispatch);
  }, [dispatch]);

  const midLetterProps = useMemo(
    () => ({
      onLetterClick,
    }),
    [onLetterClick]
  );

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
          {getMidLetters(midLetterProps)}
          <NameLetter
            onClick={onLetterClick}
            overrides={NAME_LETTER_OVERRIDES_A}
          >
            A
          </NameLetter>
        </StyledNameLast>
        <StyledNameFirst>ARDO</StyledNameFirst>
      </StyledInnerWrapper>
      {clickCount < 6 && (
        <StyledClickMyName>Psst, click my name~</StyledClickMyName>
      )}
    </StyledWrapper>
  );
};

export { NameMine };
