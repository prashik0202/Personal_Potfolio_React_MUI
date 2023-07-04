import React from 'react';
import { Container , Box , Grid , Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Footer() {

  const isNonMobile = useMediaQuery('(min-width : 600px)')

  return (
    <div className='footer'>
      <Container maxWidth='xl'>
        <Box>
          <Grid container>

            <Grid item xs={12} sm={6} md={4}>
              <Box 
              marginTop={isNonMobile ? 5 : 2} 
              marginBottom={isNonMobile ? 5 : 2}
              textAlign='center'
              >
              <Typography variant='h5' sx={{ color : '#ffd700'}}>Prashik Gamre</Typography>
            </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box
                display='flex'
                justifyContent='space-around'
                marginTop={isNonMobile ? 5 : 2} 
                marginBottom={isNonMobile ? 5 : 2}
                // backgroundColor = 'red'
              >
                <LinkedInIcon sx={{ color : '#ffd700'}}/> 
                <GitHubIcon sx={{ color : '#ffd700'}}/> 
                <InstagramIcon sx={{ color : '#ffd700'}}/> 
                <FacebookIcon sx={{ color : '#ffd700'}}/> 
                <EmailIcon sx={{ color : '#ffd700'}}/> 
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                marginTop={isNonMobile ? 5 : 2} 
                marginBottom={isNonMobile ? 5 : 2}
                textAlign='center'
              >
                <Typography variant='body2' sx={{ color : "#fdd700"}}>gamreprashik03@gmail.com</Typography>
              </Box>
            </Grid>
          </Grid>
          
          
        </Box>
      </Container>
    </div>
  )
}
