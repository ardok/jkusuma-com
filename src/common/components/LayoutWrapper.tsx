'use client';

import React from 'react';

import { AppStateProvider } from '../hooks/app-state';

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return <AppStateProvider>{children}</AppStateProvider>;
};
