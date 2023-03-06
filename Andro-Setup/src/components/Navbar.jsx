import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Navbar = () => {
  return (
    <>
    <Box sx={{display: 'flex', }} >
      <Box sx={{display: 'flex', }} >
        {["Home", "Portfolio", "Contact"].map((item) => (
          <Typography key={item} >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
    </>
  )
}

export default Navbar