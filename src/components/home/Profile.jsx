import React from 'react';
import { Box } from '@mui/material';
import pp from '../../assets/me1.png';
import { useMediaQuery } from '@mui/material';

export default function Profile() {
    const isNonMobile = useMediaQuery("(min-width : 600px)")
    return (
        <div className='profile'>
            <Box
                marginTop={isNonMobile ? '180px' : '0px'}
                marginLeft={isNonMobile ? '60px' : '0px'}
                sx={{
                    width: '100%',
                    maxWidth: 400, // Adjust the maximum size as needed
                    height: 'auto',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    backgroundColor : 'rgba(135,255,245,0.9)',
                    boxShadow:  ' 0px 0px 105px -19px rgba(135,255,245,1)'
                    // boxShadow:  "50px 50px 100px #5feac0,-50px -50px 100px #6fffe2"
                }}
            >
                <img 
                    src={pp}
                    alt="" 
                    style={{ width: '100%', height: 'auto' }}
                    className='me'
                />
            </Box>
        </div>
    )   
}
