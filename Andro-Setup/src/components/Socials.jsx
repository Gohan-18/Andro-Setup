import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/material';

const Socials = () => {
  return (
    <>
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, pt: '10px'}} >
        <a href="https://www.instagram.com/prab_hat18/" target="_blank" >
            <InstagramIcon sx={{fill: '#f4f4f4', "&:hover":{scale: '1.2'}, transition: 'all 300ms', width: {xs:'25px', md: '30px'}}} />
        </a>
        <a href="https://www.linkedin.com/in/prabhat187/" target="_blank" >
            <LinkedInIcon sx={{fill: '#f4f4f4', "&:hover":{scale: '1.2'}, transition: 'all 300ms', width: {xs:'25px', md: '30px'}}} />
        </a>
        <a href="https://www.twitter.com/prab_hat18" target="_blank" >
            <TwitterIcon sx={{fill: '#f4f4f4', "&:hover":{scale: '1.2'}, transition: 'all 300ms', width: {xs:'25px', md: '30px'}}} />
        </a>
    </Box>
    </>
  )
}

export default Socials