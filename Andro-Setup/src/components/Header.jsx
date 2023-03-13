import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import HeroImg from "../assets/Hero-Img.png";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "100%",
          alignItems: "start",
          justifyContent: "space-between",
          pt: "150px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "100%",
            width: "50%",
            alignItems: "start",
            justifyContent: "start",
            flexDirection: "column",
            pt: "50px",
            pl: '25px'
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#D05270", fontWeight: "700", fontSize: "50px" }}
          >
            Android Setups
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "#424242", fontWeight: "400", fontSize: "20px" }}
          >
            Revamp Your Boring Android Home Screen
          </Typography>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "50%",
            display: "flex",
            alignItems: "start",
            justifyContent: "end",
          }}
        >
          <CardMedia
            component="img"
            image={HeroImg}
            alt="Hero Image..."
            sx={{
              width: "80%",
              height: "80%",
              maxHeight: "360px",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Header;
