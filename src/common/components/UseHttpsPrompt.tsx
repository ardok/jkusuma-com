'use client';

import { useEffect } from 'react';

import { isDev } from '../utils/env';

export const UseHttpsPrompt = () => {
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
  return null;
};
