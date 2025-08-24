'use client';
import Button from '@mui/material/Button';
import type { NextPage } from 'next';

import { ThemeToggle } from '../../src/common/components/ThemeToggle';

const DOE: NextPage = () => {
  return (
    <>
      <ThemeToggle />
      <div>
        <Button variant="outlined">Oi</Button>
      </div>
    </>
  );
};

export default DOE;
