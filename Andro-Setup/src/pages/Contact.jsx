import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { SetupState } from '../SetupContext';

const Contact = () => {

  const { activeFilter, setActiveFilter, navbarState, setNavbarState } = SetupState();

  useEffect(() => {
    setNavbarState(false)
  }, [])

  return (
    <>
    <Box sx={{pt: '100px'}} >
        <Typography>
            Contact
        </Typography>
    </Box>
    </>
  )
}

export default Contact