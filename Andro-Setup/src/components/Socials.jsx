import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/material';

const Socials = () => {
  return (
    <>
    {/* <section> */}
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, pt: '20px'}} >
        <a href="https://www.instagram.com/prab_hat18/" target="_blank" >
            <InstagramIcon sx={{fill: '#f4f4f4'}} />
        </a>
        <a href="https://www.linkedin.com/in/prabhat187/" target="_blank" >
            <LinkedInIcon sx={{fill: '#f4f4f4'}} />
        </a>
        <a href="https://t.me/Prab_hat18/" target="_blank" >
            <TwitterIcon sx={{fill: '#f4f4f4'}} />
        </a>
    </Box>
    {/* </section> */}
    </>
  )
}

export default Socials