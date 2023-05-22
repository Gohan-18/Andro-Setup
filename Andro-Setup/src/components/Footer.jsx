import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <>
      <Container
        maxWidth='lg'
        sx={{
          width: "100%",
          height: "200px",
          backgroundColor: "#22223b",
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ color: "#f4f4f4", fontSize: "16px" }}>
          Made with ❤️ in India
        </Typography>
        <Typography sx={{ color: "#adb5bd", fontSize: "12px" }}>
          All rights reserved ©️ Prabhat
        </Typography>
        <Typography sx={{ color: "#adb5bd", fontSize: "12px", pt: '5px' }}>
          UI Template Inspiration from <a href="https://www.figma.com/@dogu" target="_blank" >@Doğukan Erel</a> 
        </Typography>
        <Socials />
      </Container>
    </>
  );
};

export default Footer;
