'use client';
import { styled } from '@mui/material/styles';
import React from 'react';

function noop() {}

const StyledLink = styled('a')(({ theme }) => {
  return {
    color: 'inherit',
    ':hover': {
      opacity: 0.8,
    },
    transition: 'opacity 200ms',
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
