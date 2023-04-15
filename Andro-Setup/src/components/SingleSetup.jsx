import { Box, Typography } from '@mui/material'
import React from 'react'
import { SetupState } from '../SetupContext';

const SingleSetup = () => {

  const { singleSetup, setSingleSetup } = SetupState();
  console.log(singleSetup)

  return (
    <Box sx={{mt: '100px'}} >
      <Typography>Single setup</Typography>
    </Box>
  )
}

export default SingleSetup