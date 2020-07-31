// @flow
import React from 'react';
import { styled } from 'styletron-react';

import {
  useAppState,
  dispatchClearNameClickCount,
} from '../../utils/app-state';

const StyledWrapper = styled('div', {
  position: 'absolute',
  right: '25px',
  textAlign: 'center',
  cursor: 'default',
});

const NameClickCount = () => {
  const [state, dispatch] = useAppState();
  const { nameClickCount } = state;
  return (
    <StyledWrapper
      onClick={() => {
        dispatchClearNameClickCount(dispatch);
      }}
    >
      <div>{nameClickCount}</div>
    </StyledWrapper>
  );
};

export { NameClickCount };
