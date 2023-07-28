import React from 'react';
import { Box , Typography, IconButton } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Intro() {

    const isNonMobile = useMediaQuery("(min-width : 600px)")
    return (
        <Box
            paddingTop={ isNonMobile ? "40%" : "20%"}
            paddingBottom="10%" 
        >
            <Typography variant={isNonMobile ? 'h2' : 'h3'} sx={{ color : 'black'}} className='tracking-in-expand'>
                Prashik Gamre
            </Typography>

            <Typography variant={isNonMobile ? 'h4' : 'h5'} sx={{ color : '#212121'}} className='tracking-in-expand'>Developer</Typography>
            
            {isNonMobile ? <br /> : ''}

            <Typography variant={isNonMobile ?'body1' : 'body1'} sx={{ color : '#212121'}} >
                I'm undergraduate I.T student in Mumbai University. <br />
                As an IT undergrad student, I am passionate about technology and its transformative potential.<br/> My personal website showcases my journey in exploring innovative solutions and my commitment to continuous learning in the ever-evolving world of IT. Let's connect and delve into the realm of technology together!
            </Typography>

            <Box
                marginTop='10px'
                width='150px'
                display='flex'
                justifyContent='space-between'
                marginBottom='5px'
                
            >   
                <IconButton
                  href='https://www.linkedin.com/in/prashik-gamre-25278b231/'
                  target='_blank'
                >
                  <LinkedInIcon sx={{ color : '#0a66c2'}}/>
                </IconButton> 
                <IconButton
                  href='https://github.com/prashik0202'
                  target='_blank'
                >
                  <GitHubIcon sx={{ color : 'black'}}/>
                </IconButton> 
                <IconButton
                  href='https://www.instagram.com/_prashik_1223'
                  target='_blank'
                >
                  <InstagramIcon sx={{ color : 'rgb(228, 64, 95)'}}/>
                </IconButton> 
                <IconButton
                  href='https://www.facebook.com/prashik.gamre.3'
                  target='_blank'
                >
                  <FacebookIcon sx={{ color : 'rgb(24, 119, 242)'}}/>
                </IconButton>
            </Box>
            <Typography variant='body2' sx={{ color : '#cococo'}} className='tracking-in-expand'>gamreprashik03@gmail.com</Typography>
        </Box>
    )
}
