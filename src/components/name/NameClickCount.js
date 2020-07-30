// @flow
import React from 'react';
import { styled } from 'styletron-react';

import { GAClass } from '../../utils/ga';

const StyledWrapper = styled('div', {
  position: 'absolute',
  right: '25px',
  textAlign: 'center',
  cursor: 'default',
});

type TProps = {
  clickLetterAnimCount: number,
  clearClickCount: () => any,
};

const NameClickCount = (props: TProps) => {
  const { clickLetterAnimCount, clearClickCount } = props;
  if (typeof clickLetterAnimCount !== 'number') {
    return null;
  }

  return (
    <StyledWrapper
      onClick={() => {
        GAClass.clickAnimLetterCount();
        clearClickCount();
      }}
    >
      <div>{clickLetterAnimCount}</div>
    </StyledWrapper>
  );
};

export { NameClickCount };
