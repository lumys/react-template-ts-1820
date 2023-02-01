import { createTheme } from '@mui/material';
import { blue, lightBlue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[400],
    },
    secondary: {
      main: blue[400],
    },
  },
});

export default theme;
