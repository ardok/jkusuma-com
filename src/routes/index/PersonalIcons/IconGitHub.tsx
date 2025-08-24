'use client';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';
import React from 'react';

import { GAClass } from '../../../common/utils/ga';
import { IconBase } from './IconBase';

const StyledWrapper = styled('div')({
  position: 'absolute',
  left: 'calc(50% - 12px)',
  top: '50%',
});

const IconGitHub = () => {
  return (
    <StyledWrapper>
      <IconBase
        href="https://github.com/ardok/jkusuma-com"
        onLinkClick={() => GAClass.clickGitHub()}
        data-testid="link-github">
        <GitHubIcon color="inherit" />
      </IconBase>
    </StyledWrapper>
  );
};

export { IconGitHub };
