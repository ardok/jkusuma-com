// @flow
import React from 'react';

import { styled } from '../../utils/styletron';

function noop() {}

const StyledLink = styled('a', ({ $theme }) => {
  return {
    color: '#000',
    ':hover': {
      color: $theme.colors.blue800,
    },
    transition: 'color 200ms',
  };
});

type TProps = {
  href: string,
  onLinkClick: () => any,
  children: React$Node,
};

const IconBase = (props: TProps) => {
  const { href = '', onLinkClick = noop, children } = props;
  return (
    <StyledLink href={href} onClick={onLinkClick}>
      {children}
    </StyledLink>
  );
};

export { IconBase };
