import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography : {
      fontFamily : [
        'Source Code Pro',
        'monospace'
      ].join(',')
    },
    palette : {
      mode : 'dark'
    }
})