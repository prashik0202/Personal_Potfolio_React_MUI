import React from 'react';
import { Box } from '@mui/material';
import pp from '../../assets/me1.png';
import { useMediaQuery } from '@mui/material';

export default function Profile() {
    const isNonMobile = useMediaQuery("(min-width : 600px)")
    return (
        <Box
            marginTop={isNonMobile ? '170px' : '0px'}
            marginLeft={isNonMobile ? '60px' : '0px'}
            sx={{
                width: '100%',
                maxWidth: 400, // Adjust the maximum size as needed
                height: 'auto',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor : 'rgba(0, 230, 118,0.9)'
            }}
        >
            <img 
                src={pp}
                alt="" 
                style={{ width: '100%', height: 'auto' }}
                
            />
        </Box>
    )   
}
