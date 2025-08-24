'use client';

import { css } from '@emotion/css';
import React, { useEffect, useState } from 'react';

import { useAppState } from '../hooks/app-state';

const NameClickCount = () => {
  const [state, { dispatchClearNameClickCount }] = useAppState();
  const { nameClickCount } = state;
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  if (!isVisible) {
    return null;
  }
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
