import React from 'react'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Container , Box, Typography, Grid , Button }  from '@mui/material';
import { useMediaQuery } from '@mui/material';
import contact from '../assets/contact.svg'

export default function Contact() {

  const isNonMobile = useMediaQuery("(min-width : 600px)");

  return (
    <div id='contact'>
      <Box marginTop={isNonMobile ? 30 : 1}  marginBottom={isNonMobile ? 10 : 20}>
        <Box>
          <Typography variant='h5'sx={{ color : 'rgba(135,255,245,0.9)'}}>Contact Me</Typography>
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={12} sm={6} md={6}>
              { isNonMobile && (<img src={contact} alt="contact" />)}
              
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box padding={isNonMobile ? 10 : 1} marginTop={isNonMobile ? 4 : 2}>
                <form action="https://formsubmit.co/8fc3faf6a7ab1f0450a8a3a1299702b6" method="POST" >

                <FormControl fullWidth  variant="standard" >
                  <TextField
                    name='name'
                    type='text'
                    label="Name" 
                    // color='success'
                    variant="filled" 
                    focused
                    sx={{ marginBottom : 4}}
                    required
                  />
                </FormControl>

                <FormControl fullWidth  variant="standard">
                  <TextField
                    name='email' 
                    label="email" 
                    variant="filled"
                    // color='success'
                    focused
                    sx={{ marginBottom : 4}}
                    required
                    type='email'
                  />
                </FormControl>

                <FormControl fullWidth  variant="standard">
                  <TextField
                    name='message'
                    type='text'
                    label="Message" 
                    variant="filled"
                    // color='success' 
                    multiline
                    rows={4}
                    focused
                    sx={{ marginBottom : 4}}
                  />
                </FormControl>

                <FormControl fullWidth variant='standard'>
                  <Button
                    type='submit'
                    variant='contained' 
                    sx={{ 
                      backgroundColor : 'rgba(245,245,245,0.8)',
                      color : 'black',
                      fontWeight : 'bold',
                      ":hover" : {
                        background : 'linear-gradient(90deg, rgba(199, 180, 255, 1), rgba(255, 208, 246, 1), rgba(164, 255, 206, 1))'
                      }
                    }}
                    elevation={20}
                    size='large'
                  >
                    Submit
                  </Button>
                </FormControl>

                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}
