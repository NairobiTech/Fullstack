import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5ACCCC',
    },
    secondary: {
      main: '#FF6434',
    },
    error: {
      main: '#F76C34',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#335C6E',
      secondary: '#FABD33',
    },
  },
  typography: {
    fontFamily: '"Mulish", sans-serif',
  },
});

export default theme;
