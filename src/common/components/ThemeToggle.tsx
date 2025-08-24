import DarkModeIcon from '@mui/icons-material/DarkMode';
import Box from '@mui/material/Box';
import { useColorScheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

import { useThemeProvider } from '../../theme';

export const ThemeToggle = () => {
  const { mode, setMode } = useThemeProvider();
  const { setMode: colorSchemeSetMode } = useColorScheme();
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
          colorSchemeSetMode(newMode);
          setMode(newMode);
        }}
      />
      <DarkModeIcon />
    </Box>
  );
};
