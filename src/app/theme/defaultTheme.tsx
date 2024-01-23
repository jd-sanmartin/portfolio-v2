import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#00b39b',
    },
    secondary: {
      main: '#0A6DC7',
    },
    mode: 'dark',
  },
});

theme = createTheme(theme, {
  pallete: {
    primary: theme.palette.augmentColor({
      color: { main: '#00b39b' },
    }),
    secondary: theme.palette.augmentColor({
      color: { main: '#0A6DC7' },
    }),
  }
});

export default theme;