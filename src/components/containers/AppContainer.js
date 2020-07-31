// @flow
import React from 'react';
import { styled } from 'styletron-react';

const GAText = styled('div', {
  position: 'absolute',
  bottom: '10px',
  left: '10px',
  fontSize: '9px',
});

const AppContainer = ({ children }: { children: React$Node }) => (
  <>
    <div>{children}</div>
    <GAText>This website is using Google Analytics</GAText>
  </>
);

export { AppContainer };
