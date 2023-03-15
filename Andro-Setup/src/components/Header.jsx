import { Box, Button, CardMedia, Typography } from "@mui/material";
import React from "react";
import HeroImg from "../assets/Hero-Img.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
          // px: '10px'
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
            // pl: "10px",
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{
                color: "#D05270",
                fontWeight: "700",
                fontSize: "50px",
                textTransform: "uppercase",
              }}
            >
              Android Setups
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#424242",
                fontWeight: "500",
                fontSize: "30px",
                fontWeight: "500",
                pb: "20px",
              }}
            >
              Revamp Your Boring Android Home Screen.
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#5c5c5c",
                fontWeight: "400",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "25px",
                //   textTransform: 'capitalize'
              }}
            >
              Got fed up looking at your regular, boring Android home screen
              daily!!? Let us spice it up by customizing it to your taste...
              Browse a variety of Android Home Screen Setups and set whichever
              you like to yours today!!
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
              width: "100%",
              height: "100%",
              py: "30px",
              gap: 2,
              flexWrap: 'wrap'
            }}
          >
            <a href="https://www.instagram.com/prab_hat18" target="_blank" >
            <Button
              variant="contained"
              startIcon={<InstagramIcon />}
              sx={{
                width: "160px",
                height: "60px",
                // px: '25px',
                // py: '15px',
                backgroundColor: "#E1306C",
                fontSize: '16px',
                "&:hover": {
                    backgroundColor: '#c3295c'
                }
              }}
            >
              Instagram
            </Button>
            </a>

            <a href="https://www.twitter.com/prab_hat18" target="_blank" >
            <Button
              variant="contained"
              startIcon={<TwitterIcon />}
              sx={{
                width: "160px",
                height: "60px",
                backgroundColor: "#1DA1F2",
                fontSize: '16px',
                "&:hover": {
                    backgroundColor: '#187cbb'
                }
              }}
            >
              Twitter
            </Button>
            </a>

            <a href="https://www.linkedin.com/in/prabhat187" target="_blank" >
            <Button
              variant="contained"
              startIcon={<LinkedInIcon />}
              sx={{
                width: "160px",
                height: "60px",
                backgroundColor: "#0072b1 ",
                fontSize: '16px',
                "&:hover": {
                    backgroundColor: '#01669d'
                }
              }}
            >
              LinkedIn
              {/* 01669d */}
            </Button>
            </a>

          </Box>
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
          <Box
            sx={{
              width: "500px",
              height: "500px",
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
      </Box>
    </>
  );
};

export default Header;
