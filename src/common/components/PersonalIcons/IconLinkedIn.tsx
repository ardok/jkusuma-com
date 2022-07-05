import React from 'react';

import { styled } from '../../utils/styletron';
import { IconBase } from './IconBase';
import { GAClass } from '../../utils/ga';

const StyledWrapper = styled('div', {
  position: 'absolute',
  left: 'calc(50% - 18px)',
  top: 0,
  fontSize: '36px',
  marginTop: '12px',
});

const IconLinkedIn = () => {
  return (
    <StyledWrapper>
      <IconBase
        href="https://www.linkedin.com/in/ardokusuma/"
        onLinkClick={() => GAClass.clickLinkedIn()}>
        {/* @ts-ignore */}
        <ion-icon name="logo-linkedin"></ion-icon>
      </IconBase>
    </StyledWrapper>
  );
};

export { IconLinkedIn };
