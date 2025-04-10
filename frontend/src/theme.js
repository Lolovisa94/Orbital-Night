import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#161e3c',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#D2D68D',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default Theme;
