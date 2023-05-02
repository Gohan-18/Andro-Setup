import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { SetupState } from '../SetupContext';

function About() {

  const { activeFilter, setActiveFilter, navbarState, setNavbarState } = SetupState();

  useEffect(() => {
    setActiveFilter('About');
    setNavbarState(false)
  }, [])
  

  return (
    <>
    <Box sx={{pt: '100px'}} >
        <Typography>
            About
        </Typography>
    </Box>
    </>
  )
}

export default About