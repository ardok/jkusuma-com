'use client';

import React, { useEffect, useState } from 'react';

import { useAppState } from '../../common/hooks/app-state';

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
      style={{
        position: 'absolute',
        right: '25px',
        textAlign: 'center',
        cursor: 'default',
      }}
      onClick={() => {
        dispatchClearNameClickCount();
      }}>
      <div>{nameClickCount}</div>
    </div>
  );
};

export { NameClickCount };
