import { CSSObject } from '@emotion/react';
import { styled } from '@mui/material';
import React, { useRef, useState } from 'react';

import { getRandomAnimation } from './styles';

export const StyledNameLetter = styled('div')(({
  animating,
  animation,
  style,
}: {
  animating: boolean;
  animation: any;
  style: CSSObject;
}) => {
  return {
    display: 'inline-block',
    cursor: 'default',
    ...(animating ? animation : {}),
    ...style,
  };
});

const NameLetter = ({
  onClick,
  noAnimation,
  overrides,
  children,
}: {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => any;
  noAnimation?: boolean;
  overrides?: {
    Root?: {
      style?: any;
    };
  };
  children: React.ReactNode;
}) => {
  const [animating, setAnimating] = useState(false);
  const [hasAnimationEnded, setHasAnimationEnded] = useState(false);
  const animation = useRef(getRandomAnimation()).current;

  const rootOverridesStyle = overrides?.Root?.style as any;

  return (
    <StyledNameLetter
      animating={animating}
      animation={animation}
      onClick={(evt: React.MouseEvent<HTMLDivElement>) => {
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
      }>
      {children}
    </StyledNameLetter>
  );
};

export { NameLetter };
