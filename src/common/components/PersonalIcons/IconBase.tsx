import React from 'react';

import { styled, ThemeT } from '../../utils/styletron';

function noop() {}

const StyledLink = styled('a', ({ $theme }: { $theme: ThemeT }) => {
  return {
    color: '#000',
    ':hover': {
      color: $theme.colors.blue800,
    },
    transition: 'color 200ms',
  };
});

type PropsT = {
  href: string;
  onLinkClick: () => any;
  children: React.ReactNode;
};

const IconBase = (props: PropsT) => {
  const { href = '', onLinkClick = noop, children, ...rest } = props;
  return (
    <StyledLink {...rest} href={href} onClick={onLinkClick}>
      {children}
    </StyledLink>
  );
};

export { IconBase };
