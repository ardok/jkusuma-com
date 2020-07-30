// @flow
import React, { useState } from 'react';

import { styled } from '../../utils/styletron';
import { GAClass } from '../../utils/ga';
import { FALLING_ANIMATION } from '../../utils/styles';
import type { TStyle } from '../../utils/types';

export const StyledNameLetter = styled<{ $animating: boolean }>(
  'div',
  ({ $animating }) => {
    return {
      display: 'inline-block',
      cursor: 'default',
      ...($animating ? FALLING_ANIMATION : {}),
    };
  }
);

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

  const rootOverridesStyle = overrides?.Root?.style;

  return (
    <StyledNameLetter
      $animating={animating}
      onClick={(evt) => {
        if (!noAnimation && !animating) {
          GAClass.clickAnimLetter();
          setAnimating(true);
          if (typeof onClick === 'function') {
            onClick(evt);
          }
        }
      }}
      style={rootOverridesStyle}
    >
      {children}
    </StyledNameLetter>
  );
};

export { NameLetter };
