import React from 'react';

import { useStyletron } from '../utils/styletron';
import { useAppState } from '../hooks/app-state';

const NameClickCount = () => {
  const [css, theme] = useStyletron();
  const [state, { dispatchClearNameClickCount }] = useAppState();
  const { nameClickCount } = state;
  return (
    <div
      className={css({
        position: 'absolute',
        right: '25px',
        textAlign: 'center',
        cursor: 'default',
      })}
      onClick={() => {
        dispatchClearNameClickCount();
      }}>
      <div>{nameClickCount}</div>
    </div>
  );
};

export { NameClickCount };
