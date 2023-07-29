import React from 'react';
import { Container , Box , Grid , Typography , IconButton} from '@mui/material'
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
        <Box >
          <Grid container>

            <Grid item xs={12} sm={12} md={4}>
              <Box 
              marginTop={isNonMobile ? 5 : 2} 
              marginBottom={isNonMobile ? 5 : 2}
              textAlign='center'
              >
              <Typography variant='h5' color='primary.main'>Prashik Gamre</Typography>
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
                <IconButton
                  href='https://www.linkedin.com/in/prashik-gamre-25278b231/'
                  target='_blank'
                >
                  <LinkedInIcon color='primary.main'/>
                </IconButton> 
                <IconButton
                  href='https://github.com/prashik0202'
                  target='_blank'
                >
                  <GitHubIcon color='primary.main'/>
                </IconButton> 
                <IconButton
                  href='https://www.instagram.com/_prashik_1223'
                  target='_blank'
                >
                  <InstagramIcon color='primary.main'/>
                </IconButton> 
                <IconButton
                  href='https://www.facebook.com/prashik.gamre.3'
                  target='_blank'
                >
                  <FacebookIcon color='primary.main'/>
                </IconButton> 
                <IconButton
                  onClick={() => window.location = 'mailto:gamreprashik03@gmail.com'}
                >
                  <EmailIcon color='primary.main'/>
                </IconButton> 
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                marginTop={isNonMobile ? 5 : 2} 
                marginBottom={isNonMobile ? 5 : 2}
                textAlign='center'
              >
                <Typography variant='body2' color='primary.main'>gamreprashik03@gmail.com</Typography>
              </Box>
            </Grid>
          </Grid>
          
          
        </Box>
      </Container>
    </div>
  )
}
