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
        alignItems: {
          xs: "center",
          md: "start",
        },
        justifyContent: {
          xs: "start",
          md: "space-between",
        },
        flexDirection: {
          xs: "column",
          md: "row",
        },
        width: "100%",
        // pt: '30px',
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "50%",
          },
          my: "20px",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          // border: '2px solid red'
          // padding: '20px'
          px: "30px",
          py: "10px",
        }}
      >
        <CardMedia
          component="img"
          image={setupImage?.url}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundColor: "#f8f9fa",
            borderRadius: {
              xs: "10px",
              md: "20px",
            },
            margin: "20px",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
          flexDirection: "column",
          width: { xs: "100%", lg: "50%" },
          my: "50px",
          px: { xs: "10px", md: "30px" },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "25px",
              md: "30px",
            },
            fontWeight: 600,
            color: "#1d3557",
            pb: "10px",
          }}
        >
          {title}{" "}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "15px",
              md: "20px",
            },
            fontWeight: 500,
            color: "#457b9d",
          }}
        >
          Launcher : {launcher}{" "}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "15px",
              md: "20px",
            },
            fontWeight: 500,
            color: "#457b9d",
          }}
        >
          Icon Pack : {iconPack}{" "}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "15px",
              md: "20px",
            },
            fontWeight: 500,
            color: "#457b9d",
          }}
        >
          Date : {uploadedDate}{" "}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "15px",
              md: "20px",
            },
            fontWeight: 500,
            color: "#457b9d",
          }}
        >
          wallpaper : {wallpaper}{" "}
        </Typography>
        {widgets.map((item) => (
          <Typography
            key={item}
            sx={{
              fontSize: {
                xs: "15px",
                md: "20px",
              },
              fontWeight: 500,
              color: "#457b9d",
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default SingleSetup;
