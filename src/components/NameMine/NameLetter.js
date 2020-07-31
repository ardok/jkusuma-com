// @flow
import React, { useState, useRef } from 'react';

import { styled } from '../../utils/styletron';
import { getRandomAnimation } from './styles';
import type { TStyle } from '../../utils/types.flow';

export const StyledNameLetter = styled<{
  $animating: boolean,
  $animation: { [string]: any },
}>('div', ({ $animating, $animation }) => {
  return {
    display: 'inline-block',
    cursor: 'default',
    ...($animating ? $animation : {}),
  };
});

type TProps = {
  onClick?: (Event) => any,
  noAnimation?: boolean,
  overrides?: ?{
    Root?: ?{
      style?: TStyle,
    },
  },
  children: React$Node,
};

const NameLetter = ({ onClick, noAnimation, overrides, children }: TProps) => {
  const [animating, setAnimating] = useState(false);
  const [hasAnimationEnded, setHasAnimationEnded] = useState(false);
  const animation = useRef(getRandomAnimation()).current;

  const rootOverridesStyle = overrides?.Root?.style;

  return (
    <StyledNameLetter
      $animating={animating}
      $animation={animation}
      onClick={(evt) => {
        if (!noAnimation && !animating) {
          setAnimating(true);
          if (typeof onClick === 'function') {
            onClick(evt);
          }
        }
      }}
      onAnimationEnd={() => setHasAnimationEnded(true)}
      style={
        hasAnimationEnded
          ? {
              // This is to prevent scrolling
              ...rootOverridesStyle,
              animationFillMode: 'none',
              opacity: 0,
            }
          : rootOverridesStyle
      }
    >
      {children}
    </StyledNameLetter>
  );
};

export { NameLetter };
