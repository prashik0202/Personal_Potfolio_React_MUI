import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography : {
      fontFamily : [
        'Fira Sans',
        'sans-serif'
      ].join(',')
    },
    palette : {
      mode : 'light'
    }
});