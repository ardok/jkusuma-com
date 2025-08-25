import DarkModeIcon from '@mui/icons-material/DarkMode';
import Box from '@mui/material/Box';
import { useColorScheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

import { useThemeProvider } from '../../theme';

export const ThemeToggle = () => {
  const { mode, setMode } = useThemeProvider();
  const { setMode: csSetMode } = useColorScheme();
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        bottom: '40px',
        right: '20px',
      })}>
      <Switch
        checked={mode === 'dark'}
        onChange={() => {
          const newMode = mode === 'dark' ? 'light' : 'dark';
          /*
          For the love of me, don't know why putting this csSetMode inside
          useThemeProvider does NOT work.
          It has to be in the same component the toggle is in.
          Maybe that's the intention of usage? Not sure.
          Anyway, keeping this here.
          */
          csSetMode(newMode);
          setMode(newMode);
        }}
      />
      <DarkModeIcon />
    </Box>
  );
};
