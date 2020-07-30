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

export const MEDIA_QUERY_PHONE = '@media (max-width: 768px)';
