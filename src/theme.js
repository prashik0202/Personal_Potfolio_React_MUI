import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography : {
      fontFamily : [
        'Fira Sans',
        'sans-serif'
      ].join(',')
    },
    palette : {
      mode : 'dark',
      primary : {
        main : 'rgba(135,255,245,0.9)',

      }
    }
});