// @flow
import React from 'react';
import { styled, useStyletron } from '../../utils/styletron';
import { ANIMATION_TIME_MS, SQUARE_SIZE_PX } from './constants';
import { FALLING_ANIMATION } from '../../utils/styles';

const StyledCircleCutAnimationWrapper = styled('div', ({ $theme }) => ({
  width: SQUARE_SIZE_PX,
  height: SQUARE_SIZE_PX,
  position: 'absolute',
  backgroundColor: $theme.colors.grey100,
  zIndex: 1,
  borderRadius: '50%',

  ...FALLING_ANIMATION,
  animationDelay: `${ANIMATION_TIME_MS}ms`,
}));

/*
Copied from
https://css-tricks.com/building-progress-ring-quickly/
 */
const RADIUS = 54;
const STROKE = 3;
const NORMALIZED_RADIUS = RADIUS - STROKE * 2;
const CIRCUMFERENCE = NORMALIZED_RADIUS * 2 * Math.PI;
const SIZE = 110;
const CircleCutAnimation = () => {
  const [css] = useStyletron();
  const svgClassStyle = css({
    position: 'relative',
    top: '-6px',
    left: '-4px',
  });
  const ringCircleClassStyle = css({
    transform: 'rotate(-90deg)',
    transformOrigin: '50% 50%',
    animationDuration: `${ANIMATION_TIME_MS}ms`,
    animationFillMode: 'forwards',
    animationTimingFunction: 'linear',
    animationName: {
      '0%': {
        strokeDashoffset: `${CIRCUMFERENCE}`,
      },
      '100%': {
        strokeDashoffset: 0,
      },
    },
  });
  return (
    <StyledCircleCutAnimationWrapper>
      <svg className={svgClassStyle} width={SIZE} height={SIZE}>
        <circle
          className={ringCircleClassStyle}
          stroke="#000"
          strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
          strokeWidth={STROKE}
          fill="transparent"
          r={NORMALIZED_RADIUS}
          cx={RADIUS}
          cy={RADIUS}
        />
      </svg>
    </StyledCircleCutAnimationWrapper>
  );
};

export { CircleCutAnimation };
