// @flow
const FALLING_ANIMATION_NAME = {
  '0%': {
    transform: 'rotate(0deg)',
  },
  '30%': {
    transform: 'rotate(210deg)',
  },
  '60%': {
    transform: 'rotate(150deg)',
  },
  '90%': {
    transform: 'rotate(180deg)',
    opacity: 1,
  },
  '100%': {
    transform: 'translateY(250px)',
    opacity: 0,
  },
};

export const FALLING_ANIMATION_DURATION_MS = 1000;
export const FALLING_ANIMATION = {
  animationDuration: `${FALLING_ANIMATION_DURATION_MS}ms`,
  animationFillMode: 'forwards',
  animationTimingFunction: 'ease-in',
  transformOrigin: 'bottom center',
  animationName: FALLING_ANIMATION_NAME,
};

const JUMP_FALLING_ANIMATION_NAME = {
  '0%': {
    transform: 'scale(1, 1) translateY(0)',
  },
  '30%': {
    transform: 'scale(2, 0.5) translateY(0)',
  },
  '60%': {
    transform: 'scale(1, 1) translateY(-125px)',
    opacity: 1,
  },
  '100%': {
    transform: 'scale(1, 1) translateY(400px)',
    opacity: 0,
    display: 'hidden',
  },
};
export const JUMP_FALLING_ANIMATION = {
  animationDuration: `${FALLING_ANIMATION_DURATION_MS}ms`,
  animationFillMode: 'forwards',
  animationTimingFunction: 'ease-in',
  transformOrigin: 'bottom center',
  animationName: JUMP_FALLING_ANIMATION_NAME,
};

export const MEDIA_QUERY_PHONE = '@media (max-width: 768px)';
