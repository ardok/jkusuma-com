'use client';
import { styled } from '@mui/material';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useAppState } from '../../../common/hooks/app-state';
import { FALLING_ANIMATION_DURATION_MS } from '../../../common/utils/styles';
import { NameLetter } from './NameLetter';
import {
  NAME_LETTER_OVERRIDES_A,
  NAME_LETTER_OVERRIDES_K,
  StyledInnerWrapper,
  StyledNameFirst,
  StyledNameLast,
  StyledWrapper,
} from './styles';

const MID_LETTERS = ['U', 'S', 'U', 'M'];

const StyledClickMyName = styled('div')({
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

function unsetBodyNoScroll() {
  document.body.style.overflow = '';
}

function setBodyNoScroll() {
  document.body.style.overflow = 'hidden';
}

const NameMine = () => {
  const [, { dispatchNameClick }] = useAppState();
  const [clickCount, setClickCount] = useState(0);

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        document.body.style.overflow = ''; // ensure overflow is restored
      }
    };
  }, []);

  const onLetterClick = useCallback(() => {
    setClickCount((c) => c + 1);
    dispatchNameClick();

    // Always clear timeout on click
    timeoutRef.current && clearTimeout(timeoutRef.current);
    setBodyNoScroll();
    timeoutRef.current = setTimeout(() => {
      unsetBodyNoScroll();
      timeoutRef.current = null;
    }, FALLING_ANIMATION_DURATION_MS + 250);
  }, [dispatchNameClick]);

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
            overrides={NAME_LETTER_OVERRIDES_K}>
            K
          </NameLetter>
          {getMidLetters(midLetterProps)}
          <NameLetter
            onClick={onLetterClick}
            overrides={NAME_LETTER_OVERRIDES_A}>
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
