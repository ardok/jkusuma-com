'use client';
import { styled } from '@mui/material/styles';
import React from 'react';

import { CircleCutAnimation } from './CircleCutAnimation';
import { SQUARE_SIZE_PX } from './constants';
import { IconGitHub } from './IconGitHub';
import { IconLinkedIn } from './IconLinkedIn';

const StyledWrapper = styled('div')({
  position: 'absolute',
  left: 'calc(50% - 50px)',
  top: 'calc(50% - 160px)',
  zIndex: 1,
});

const StyledIconsWrapper = styled('div')(({ theme }) => ({
  width: SQUARE_SIZE_PX,
  height: SQUARE_SIZE_PX,
  boxShadow: 'inset 0px 0px 4px 0px black',
  borderRadius: '50%',
  backgroundColor: 'inherit',
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.grey[800],
  }),
}));

const PersonalIcons = () => {
  return (
    <StyledWrapper>
      <CircleCutAnimation />
      <StyledIconsWrapper>
        <IconLinkedIn />
        <IconGitHub />
      </StyledIconsWrapper>
    </StyledWrapper>
  );
};

export { PersonalIcons };
