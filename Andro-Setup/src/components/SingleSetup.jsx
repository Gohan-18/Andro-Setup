import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import { SetupState } from "../SetupContext";

const SingleSetup = () => {
  const { singleSetup, setSingleSetup } = SetupState();
  console.log(singleSetup);

  const {
    setupImage,
    title,
    id,
    setup_id,
    iconPack,
    launcher,
    uploadedDate,
    wallpaper,
    widgets,
  } = singleSetup;

  return (
    <Box
      sx={{
        mt: "100px",
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        // flexDirection: "column",
        width: '100%',
        pt: '30px'
      }}
    >
      {/* <Typography>Single setup</Typography> */}
      <Box sx={{width: '50%'}} >
      <CardMedia
        component="img"
        image={setupImage?.url}
        alt={title}
        sx={{
          // maxHeight: '300px',
          width: "500px",
          height: "500px",
          // width: "100%",
          // height: "100%",
          objectFit: "cover",
          backgroundColor: "#f8f9fa",
          borderRadius: '20px'
        }}
      />
      </Box>

      <Box 
        sx={{display: 'flex', alignItems: 'start', justifyContent: 'start', flexDirection: 'column', width: '50%' }} >
        <Typography>{title} </Typography>
      </Box>

    </Box>
  );
};

export default SingleSetup;
