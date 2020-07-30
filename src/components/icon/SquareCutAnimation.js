// @flow
import React from 'react';

import { styled } from '../../utils/styletron';
import { ANIMATION_TIME_MS } from './constants';
import { FALLING_ANIMATION } from '../../utils/styles';

const STYLE_SQUARE_COMMON = {
  backgroundColor: '#000',
  position: 'absolute',
};

const STYLE_SQUARE_ANIMATION_COMMON = {
  animationDuration: `${ANIMATION_TIME_MS}ms`,
  animationFillMode: 'forwards',
  animationTimingFunction: 'ease-in',
};

const StyledSquareCutWrapper = styled('div', {
  width: '100px',
  height: '100px',
  top: '-9px',
  position: 'absolute',
  overflow: 'hidden',
  backgroundColor: '#fafafa',
  zIndex: 1,

  ...FALLING_ANIMATION,
  animationDelay: `${ANIMATION_TIME_MS}ms`,
});

const StyledSquareCutTop = styled('div', {
  ...STYLE_SQUARE_COMMON,
  ...STYLE_SQUARE_ANIMATION_COMMON,
  height: '2px',
  top: 0,
  animationName: {
    '0%': {
      width: 0,
    },
    '100%': {
      width: '100%',
    },
  },
});

const StyledSquareCutRight = styled('div', {
  ...STYLE_SQUARE_COMMON,
  ...STYLE_SQUARE_ANIMATION_COMMON,
  width: '3px',
  right: 0,
  top: 0,
  animationName: {
    '0%': {
      height: 0,
    },
    '100%': {
      height: '100%',
    },
  },
});

const StyledSquareCutBottom = styled('div', {
  ...STYLE_SQUARE_COMMON,
  ...STYLE_SQUARE_ANIMATION_COMMON,
  height: '2px',
  width: '100%',
  bottom: 0,
  animationName: {
    '0%': {
      transform: 'translateX(100px)',
    },
    '100%': {
      transform: 'translateX(0)',
    },
  },
});

const StyledSquareCutLeft = styled('div', {
  ...STYLE_SQUARE_COMMON,
  ...STYLE_SQUARE_ANIMATION_COMMON,
  width: '2px',
  height: '100%',
  left: 0,
  animationName: {
    '0%': {
      transform: 'translateY(100px)',
    },
    '100%': {
      transform: 'translateY(0)',
    },
  },
});

const SquareCutAnimation = () => {
  return (
    <StyledSquareCutWrapper>
      <StyledSquareCutTop />
      <StyledSquareCutRight />
      <StyledSquareCutBottom />
      <StyledSquareCutLeft />
    </StyledSquareCutWrapper>
  );
};

export { SquareCutAnimation };
