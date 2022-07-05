import React from 'react';

import { styled } from '../../utils/styletron';
import { IconLinkedIn } from './IconLinkedIn';
import { IconGitHub } from './IconGitHub';

import { SquareCutAnimation } from './SquareCutAnimation';
import { SQUARE_SIZE_PX } from './constants';
import { CircleCutAnimation } from './CircleCutAnimation';

const StyledWrapper = styled('div', {
  position: 'absolute',
  left: 'calc(50% - 50px)',
  top: 'calc(50% - 160px)',
  zIndex: 1,
});

const StyledIconsWrapper = styled('div', {
  width: SQUARE_SIZE_PX,
  height: SQUARE_SIZE_PX,
  boxShadow: 'inset 0px 0px 4px 0px black',
  borderRadius: '50%',
});

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
