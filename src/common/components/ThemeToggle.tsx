import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';
import { useCookies } from 'react-cookie';

import { useThemeProvider } from '../../theme';

export const ThemeToggle = () => {
  const { mode, setMode } = useThemeProvider();
  return (
    <>
      <Switch
        checked={mode === 'dark'}
        onChange={() => {
          const newMode = mode === 'dark' ? 'light' : 'dark';
          setMode(newMode);
        }}
      />
      <DarkModeIcon />
    </>
  );
};
