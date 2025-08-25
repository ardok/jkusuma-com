'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { login } from '../../app/actions/auth';

export const LoginForm = () => {
  const router = useRouter();

  useEffect(() => {
    return () => {
      const htmlEl = document.querySelector('html');
      if (!htmlEl) {
        return;
      }
      htmlEl.style.height = 'inherit';
    };
  }, []);

  return (
    <Box
      sx={(theme) => ({
        marginTop: '100px',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const result = await login(formData);
          if (!result.ok) {
            return;
          }
          router.push(result.nextUrl || '/');
        }}>
        <div>
          <TextField
            type="password"
            name="password"
            label="Password"
            variant="outlined"
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          sx={{ width: '100%', marginTop: '12px' }}>
          Login
        </Button>
      </form>
    </Box>
  );
};
