import React from 'react';

import { IconBase } from './IconBase';
import { GAClass } from '../../utils/ga';
import { styled } from '../../utils/styletron';

const StyledWrapper = styled('div', {
  position: 'absolute',
  left: 'calc(50% - 18px)',
  top: '45%',
  fontSize: '36px',
  marginTop: '6px',
});

const IconGitHub = () => {
  return (
    <StyledWrapper>
      <IconBase
        href="https://github.com/ardok/jkusuma-com"
        onLinkClick={() => GAClass.clickGitHub()}
        data-testid="link-github">
        {/* @ts-ignore */}
        <ion-icon name="logo-github" title="icon-github"></ion-icon>
      </IconBase>
    </StyledWrapper>
  );
};

export { IconGitHub };
