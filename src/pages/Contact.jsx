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
      <Box marginTop={isNonMobile ? 20 : 1}  marginBottom={isNonMobile ? 10 : 20}>
        <Box>
          <Typography variant='h5'sx={{ color : '#daa520'}}>Contact Me</Typography>
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={12} sm={6} md={6}>
              { isNonMobile && (<img src={contact} alt="contact" />)}
              
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box padding={isNonMobile ? 10 : 1} marginTop={isNonMobile ? 4 : 2}>
                <form>

                <FormControl fullWidth  variant="standard" >
                  <TextField 
                    type='text'
                    label="Name" 
                    variant="filled" 
                    color="warning"
                    focused
                    sx={{ marginBottom : 4}}
                  />
                </FormControl>

                <FormControl fullWidth  variant="standard">
                  <TextField 
                    label="email" 
                    variant="filled" 
                    color="warning"
                    focused
                    sx={{ marginBottom : 4}}
                  />
                </FormControl>

                <FormControl fullWidth  variant="standard">
                  <TextField
                    type='text'
                    label="Message" 
                    variant="filled" 
                    color="warning"
                    multiline
                    rows={4}
                    focused
                    sx={{ marginBottom : 4}}
                  />
                </FormControl>

                <FormControl fullWidth variant='standard'>
                  <Button
                    variant='contained' 
                    sx={{ 
                      backgroundColor : '#ffd700',
                      color : 'black',
                      fontWeight : 'bold',
                      ":hover" : {
                        backgroundColor : '#dda520'
                      }
                    }}
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
