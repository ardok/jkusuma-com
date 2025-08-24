'use client';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';
import React from 'react';

import { GAClass } from '../../../common/utils/ga';
import { IconBase } from './IconBase';

const StyledWrapper = styled('div')({
  position: 'absolute',
  left: 'calc(50% - 12px)',
  top: 'calc(30% - 12px)',
});

const IconLinkedIn = () => {
  return (
    <StyledWrapper>
      <IconBase
        href="https://www.linkedin.com/in/ardokusuma/"
        onLinkClick={() => GAClass.clickLinkedIn()}>
        <LinkedInIcon />
      </IconBase>
    </StyledWrapper>
  );
};

export { IconLinkedIn };
