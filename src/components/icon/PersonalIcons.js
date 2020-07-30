// @flow
import React from 'react';

import { styled } from '../../utils/styletron';
import { IconLinkedIn } from './IconLinkedIn';
import { IconGitHub } from './IconGitHub';

import { SquareCutAnimation } from './SquareCutAnimation';
import { SQUARE_SIZE_PX } from './constants';

const StyledWrapper = styled('div', {
  position: 'absolute',
  left: 'calc(50% - 50px)',
  top: 'calc(50% - 160px)',
  zIndex: 1,
});

const StyledIconsWrapper = styled('div', {
  width: SQUARE_SIZE_PX,
  height: SQUARE_SIZE_PX,
});

const PersonalIcons = () => {
  return (
    <StyledWrapper>
      <SquareCutAnimation />
      <StyledIconsWrapper>
        <IconLinkedIn />
        <IconGitHub />
      </StyledIconsWrapper>
    </StyledWrapper>
  );
};

export { PersonalIcons };
