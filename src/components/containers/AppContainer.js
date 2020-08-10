// @flow
import React, { useEffect } from 'react';
import window from 'global/window';
import { styled } from 'styletron-react';

import { isDev } from '../../utils/env';

const useHttpsPrompt = () => {
  useEffect(() => {
    if (!isDev()) {
      // Production
      const { protocol } = window.location;
      if (!protocol.includes('https')) {
        // No https, prompt user
        const isYes = window.confirm('Would you like to redirect to https?');
        if (isYes) {
          window.location.href = `https${window.location.href.slice(4)}`;
        }
      }
    }
  }, []);
};

const GAText = styled('div', {
  position: 'absolute',
  bottom: '10px',
  left: '10px',
  fontSize: '9px',
});

const AppContainer = (props: { children: React$Node }) => {
  const { children } = props;
  useHttpsPrompt();
  return (
    <>
      <div>{children}</div>
      <GAText>This website is using Google Analytics</GAText>
    </>
  );
};

export { AppContainer };
