import { createTheme } from '@mui/material/styles';

// Material UI Theme 
// Docs: https://mui.com/material-ui/customization/theming/

export const theme = createTheme({
  palette: {
    primary: {
      //light: '#757ce8',
      main: '#5b5b5b',
      //dark: '#002884',
      contrastText: '#fff',
    },
    // secondary: {
    //   //light: '#ff7961',
    //   //main: '#f44336',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    // },
  },
});