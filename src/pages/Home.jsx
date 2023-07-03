import { Box } from '@mui/material'
import React from 'react'
import Intro from '../components/home/Intro'
import Profile from '../components/home/Profile'
import { Grid } from '@mui/material';

export default function Home() {
    return (
      <div id='about'>
      <Grid container sx={{ mt : { xs : '2%' , md : '0'}}}>
        <Grid item xs={12} sm={6} md={6}>
          <Intro />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Profile />
        </Grid>
      </Grid>
      </div>
  )
}
