import React from 'react';
import { Container, Box , Typography, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';
import omsai from '../assets/omsai.png';
import gns from '../assets/gns.png';
import reactchat from '../assets/reactchat.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const project = [
  { 
    "id" : "1", 
    "title" : "Om Sai Engineering", 
    "description" : "Om Sai Engineering produce and design Dyeing Machine",
    "tech" : [
      { "id" : "t1" , "name" : "ReactJs" },
      { "id" : "t2" , "name" : "MUI" },
      { "id" : "t3" , "name" : "CSS3" },
      { "id" : "t4" , "name" : "HTML5" },
    ],
    "image" : omsai, 
    "github" : "https://github.com/prashik0202/OM_SAI_ENGG", 
    "live" : "https://saiengg-37925.web.app"
  },
  { 
    "id" : "2", 
    "title" : "GNS Loan Sevices", 
    "description" : "GNS Loan Service gives best loan deals for their customer",
    "tech" : [
      { "id" : "t1" , "name" : "ReactJs" },
      { "id" : "t2" , "name" : "MUI" },
      { "id" : "t3" , "name" : "CSS3" },
      { "id" : "t4" , "name" : "HTML5" }
    ],
    "image" : gns, 
    "github" : "https://github.com/prashik0202/GNS_LOAN_SEVICES", 
    "live" : "https://gnsloan.in"
  },
  { 
    "id" : "3", 
    "title" : "React Chat ", 
    "description" : "This is React Chat web app where users can chat in comunity",
    "tech" : [
      { "id" : "t1" , "name" : "ReactJs" },
      { "id" : "t2" , "name" : "CSS3" },
      { "id" : "t3" , "name" : "HTML5" },
      { "id" : "t4" , "name" : "Firebase" }
    ],
    "image" : reactchat, 
    "github" : "https://github.com/prashik0202/Realtime_Chating_web_app_using_React.js_and_firebase", 
    "live" : "https://real-time-chat-app-c8b9d.web.app/"
  }
]

export default function Projects() {

  const isNonMobile = useMediaQuery("(min-width : 600px)")

  return (
    <div id='projects'>
    <Box  marginTop={isNonMobile ? 30 : 5} marginBottom={10}>
      <Typography variant='h5' sx={{ color : 'rgba(135,255,245,0.9)'}}>Projects</Typography>
      <Box marginTop={5}>

        <Grid container spacing={2}>
          { project.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            
            <Card 
              elevation={15}
              sx={{ 
                maxWidth: '100%' , 
                color : 'rgba(135,255,245,0.9)' ,
                my : 1,
                // boxShadow:  '0px 0px 300px -77px rgba(0,230,118,1)'
                // backgroundColor : 'rgba(245,245,245,0.7)'
              }} 
              className='card'
            >
              <CardMedia
              sx={{ height: 200 }}
              image={item.image}
              />
              <CardContent>
                <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="div"
                  // className='text'
                >
                {item.title}
                </Typography>
                <Typography variant="body1" color='white'>
                {item.description}
                </Typography>
                <div style={{ display : 'flex'}}>
                  {item.tech.map((tech) => (
                    <Box sx={{ backgroundColor : 'rgba(135,255,245,0.9)' }} mx={1} borderRadius={3} mt={2}>
                    <Typography variant='body2' p={1} color='black' fontWeight='bold'>#{tech.name}</Typography>
                    </Box>
                  ))}
                </div>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  sx={{ color : 'white'}}
                  startIcon={<GitHubIcon />}
                  href={item.github}
                  target='_blank'
                >
                  code
                </Button>
                <Button 
                  size="small" 
                  sx={{ color : 'white'}}
                  startIcon={<OpenInNewIcon />}
                  href={item.live}
                  target='_blank'
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
          ))}
        </Grid>

      </Box>
    </Box> 
    </div>
  )
}