import React from 'react';
import { Box , Typography, Grid , Divider } from '@mui/material';
// icons:
import html from '../assets/html.png';
import css from '../assets/css.png';
import react from '../assets/react.png';
import js from '../assets/js.png';
import cprog from '../assets/C.png';
import cpp from '../assets/cpp.png';
import java from '../assets/java.png';
import py from '../assets/py.png';
import node from '../assets/node.png';
import firebase from '../assets/firebase.png';
import mui from '../assets/mui.png';
import bootstrap from '../assets/bootstrap.png';
import mongodb from '../assets/mongodb.png';
import mysql from '../assets/mysql.png';
import exp from '../assets/express.png';
import { useMediaQuery } from '@mui/material';

const frontend = [
  { "id" : "1" , "image" : html , "name" : "HTML5" , "bgc" : "#ef6c00"},
  { "id" : "2" , "image" : css , "name" : "CSS3" , "bgc" : "#0277bd"},
  { "id" : "3" , "image" : react , "name" : "reactJs" , "bgc" : "#4dd0e1"},
  { "id" : "4" , "image" : mui , "name" : "mUI" , "bgc" : "#0277bd"},
  { "id" : "5" , "image" : bootstrap , "name" : "bootstrap" , "bgc" : "#7c4dff"},
]

const backend = [
  { "id" : "1" , "image" : node , "name" : "node" , "bgc" : "#1b5e20"},
  { "id" : "2" , "image" : exp , "name" : "expressJs" , "bgc" : "#424242"},
  { "id" : "3" , "image" : firebase , "name" : "firebase" , "bgc" : "#ef6c00"},
]

const proglang = [
  { "id" : "1" , "image" : cprog , "name" : "c" , "bgc" : "#01579b"},
  { "id" : "2" , "image" : cpp , "name" : "c++" , "bgc" : "#039be5"},
  { "id" : "3" , "image" : java , "name" : "java" , "bgc" : "#d32f2f"},
  { "id" : "5" , "image" : py , "name" : "python" , "bgc" : "#827717"},
  { "id" : "4" , "image" : js , "name" : "javascript" , "bgc" : "#ffd600"},
]

const db = [
  { "id" : "1" , "image" : mongodb , "name" :"mongoDB" , "bgc" : "#4caf50"},
  { "id" : "2" , "image" : mysql , "name" :"mysql" , "bgc" : "#ef6c00"},

]


export default function Skills() {

  const isNonMobile = useMediaQuery("(min-width : 600px)")

  return (
    <Box marginTop={isNonMobile ? '200px' : '20px'} marginBottom={isNonMobile ? 20 : 4}>
      <Typography variant='h5'>My Skills</Typography> 
      <Box maxWidth={800}textAlign='center'marginTop={5} marginBottom={2}>
        <Grid container spacing={isNonMobile ? 2 : 1}>
          { frontend.map((item) => ( 
            // Frontend Skills
          <Grid item xs={4} sm={4} md={2} key={item.id}>
            <Box maxWidth={200} padding='4%' backgroundColor={ isNonMobile ? "rgba(250, 250, 250,0.1)" :item.bgc} borderRadius={2}>
              <Box display={isNonMobile ? undefined : 'none'} >
                <img src={item.image} alt="" height={isNonMobile ? '50px' : '35px'} />
              </Box>
              <Box  borderRadius={2}>
              <Typography 
                  sx={{ textTransform : 'capitalize' , fontWeight : 'bold' }}
                  variant={isNonMobile ? 'body1' : 'body2'}
                >{item.name}</Typography>
              </Box>
            </Box>
          </Grid>
          ))}
        </Grid>
      </Box>

      <Box maxWidth={800}textAlign='center'marginTop={3} marginBottom={2}>
        <Grid container spacing={isNonMobile ? 2 : 1}>
          { backend.map((item) => ( 
            // backend skills
          <Grid item xs={4} sm={4} md={2} key={item.id}>
            <Box maxWidth={200} padding='4%' backgroundColor={ isNonMobile ? "rgba(250, 250, 250,0.1)" :item.bgc} borderRadius={2}>
              <Box display={isNonMobile ? undefined : 'none'} >
                <img src={item.image} alt="" height={isNonMobile ? '50px' : '35px'} />
              </Box>
              <Box  borderRadius={2}>
              <Typography 
                  sx={{ textTransform : 'capitalize' , fontWeight : 'bold' }}
                  variant={isNonMobile ? 'body1' : 'body2'}
                >{item.name}</Typography>
              </Box>
            </Box>
          </Grid>
          ))}
        </Grid>
      </Box>

      <Box maxWidth={800}textAlign='center'marginTop={3} marginBottom={2}>
        <Grid container spacing={isNonMobile ? 2 : 1}>
          { proglang.map((item) => (
            // programming lang 
          <Grid item xs={4} sm={4} md={2} key={item.id}>
            <Box maxWidth={200} padding='4%' backgroundColor={ isNonMobile ? "rgba(250, 250, 250,0.1)" :item.bgc} borderRadius={2}>
              <Box display={isNonMobile ? undefined : 'none'} >
                <img src={item.image} alt="" height={isNonMobile ? '50px' : '35px'} />
              </Box>
              <Box  borderRadius={2}>
              <Typography 
                  sx={{ textTransform : 'capitalize' , fontWeight : 'bold' }}
                  variant={isNonMobile ? 'body1' : 'body2'}
                >{item.name}</Typography>
              </Box>
            </Box>
          </Grid>
          ))}
        </Grid>
      </Box>

      <Box maxWidth={800}textAlign='center'marginTop={3} marginBottom={2}>
        <Grid container spacing={isNonMobile ? 2 : 1}>
          { db.map((item) => ( 
            // Database
          <Grid item xs={4} sm={4} md={2} key={item.id}>
            <Box maxWidth={200} padding='4%' backgroundColor={ isNonMobile ? "rgba(250, 250, 250,0.1)" :item.bgc} borderRadius={2}>
              <Box display={isNonMobile ? undefined : 'none'} >
                <img src={item.image} alt="" height={isNonMobile ? '50px' : '35px'} />
              </Box>
              <Box  borderRadius={2}>
              <Typography 
                  sx={{ textTransform : 'capitalize' , fontWeight : 'bold' }}
                  variant={isNonMobile ? 'body1' : 'body2'}
                >{item.name}</Typography>
              </Box>
            </Box>
          </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
