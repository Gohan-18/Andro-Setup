import { Box, Button, CardMedia, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { SetupState } from "../SetupContext";
import { useNavigate, useParams } from "react-router-dom";

const SingleSetup = () => {
  const { singleSetup, setSingleSetup, homeSetups } = SetupState();
  const params = useParams();
  console.log(params)
  const { setupid } = params;
  const navigate = useNavigate();
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
        pt: "100px",
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
          my: '50px',
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
            color: "#D05270",
            pb: "10px",
          }}
        >
          {title}{" "}
        </Typography>
        <Box sx={{display: 'flex', width: '100%', justifyContent: 'start', alignItems: 'center', gap: 1}} >
        <Typography
          sx={{
            fontSize: {
              xs: "15px",
              md: "20px",
            },
            fontWeight: 600,
            color: "#1d3557",
          }}
        >
          Launcher :
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
          {" "}{launcher}
        </Typography>
        </Box>
        <Box sx={{display: 'flex', width: '100%', justifyContent: 'start', alignItems: 'center', gap: 1}} >
        <Typography
          sx={{
            fontSize: {
              xs: "15px",
              md: "20px",
            },
            fontWeight: 600,
            color: "#1d3557",
          }}
        >
          Icon Pack :
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
          {" "}{iconPack}
        </Typography>
        </Box>
        <Box sx={{display: 'flex', width: '100%', justifyContent: 'start', alignItems: 'center', gap: 1}} >
        <Typography
          sx={{
            fontSize: {
              xs: "15px",
              md: "20px",
            },
            fontWeight: 600,
            color: "#1d3557",
          }}
        >
          Date :
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
          {" "}{uploadedDate}
        </Typography>
        </Box>
        <Box sx={{display: 'flex', width: '100%', justifyContent: 'start', alignItems: 'center', gap: 1, flexWrap: 'wrap'}} >
        <Typography
          sx={{
            fontSize: {
              xs: "15px",
              md: "20px",
            },
            fontWeight: 600,
            color: "#1d3557",
          }}
        >
          Widget(s) :
        </Typography>
        {widgets?.map((item) => (
          <Typography
            key={item}
            sx={{
              fontSize: {
                xs: "15px",
                md: "20px",
              },
              fontWeight: 500,
              color: "#457b9d",
              textTransform: 'capitalize'
            }}
          >
            {item}
          </Typography>
        ))}
        </Box>
        <Box sx={{display: 'flex', width: '100%', justifyContent: 'start', alignItems: 'center', pt: '30px'}} >
        <a href={wallpaper} download ><Button variant="contained" size="small" >Download Wallpaper</Button></a>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleSetup;
