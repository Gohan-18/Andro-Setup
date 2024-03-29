import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { SetupState } from "../SetupContext";
import Footer from "../components/Footer";

function About() {
  const { setActiveFilter, setNavbarState } = SetupState();

  useEffect(() => {
    setActiveFilter("About");
    setNavbarState(false);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container maxWidth="md" sx={{pt: {xs: '100px', lg: '0px'}, }} >
        <Box
          sx={{
            height:{lg: '100vh'},
            py: "25px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "35px" },
              fontWeight: 600,
              color: "#5A47AB",
              borderBottom: "4px solid #5A47AB",
              width: "fit-content",
              px: "15px",
              mb: '25px'
            }}
          >
            About
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: '16px',
                md: '20px'
              },
              fontWeight: 500,
              color: "#424242",
              lineHeight: {
                xs: '25px',
                // md: '30px'
              },
              mb: {xs: '20px', md: '25px'}
            }}
          >
            So, you have been using same boring home screen that you get shipped
            as default from your android device manufacturer, or what your kid
            set up for you, by basic changes like changing the dafault
            wallpaper, and you want to make it look different, something of your
            taste. But clueless how to go by that!!? Look no further than
            Andro/Setup.
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: '16px',
                md: '20px'
              },
              fontWeight: 500,
              color: "#424242",
              lineHeight: {
                xs: '25px',
                // md: '30px'
              },
              mb: {xs: '20px', md: '25px'}
            }}
          >
            At Andro/Setup, we believe that your Android home screen is a
            reflection of your unique style and personality. Our website is
            dedicated to providing you with a curated collection of custom-made
            Android home screen styles, designed and created by Prabhat. Whether
            you're a minimalist seeking a clean and elegant look, a tech
            enthusiast looking for a futuristic design, or an artist in search
            of vibrant and creative setups, Andro/Setup has something for
            everyone.
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: '16px',
                md: '20px'
              },
              fontWeight: 500,
              color: "#424242",
              lineHeight: {
                xs: '25px',
                // md: '30px'
              },
              mb: {xs: '20px', md: '25px'}
            }}
          >
            Our goal is to inspire you and help you transform your Android
            device into a personalized masterpiece. Browse through our carefully
            crafted home screen styles, each accompanied by detailed setup
            instructions, including the wallpapers, icon packs, widgets, and
            launchers used. We ensure that every design is compatible with
            popular launchers and easily customizable to suit your preferences.
          </Typography>
        </Box>
      </Container>
      {/* <Footer/> */}
    </>
  );
}

export default About;
