import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { SetupState } from "../SetupContext";

function About() {
  const { setActiveFilter, setNavbarState } =
    SetupState();

  useEffect(() => {
    setActiveFilter("About");
    setNavbarState(false);
  }, []);

  return (
    <>
      <Box sx={{ pt: "100px" }}>
        <Box sx={{py: '20px'}} >
          <Typography>
            So, you have been using same boring home screen that you get shipped
            as default from your android device manufacturer, or what your kid
            set up for you, by basic changes like changing the dafault
            wallpaper, and you want to make it look different, something of your
            taste. But clueless how to go by that!!? Look no further than
            Andro/Setup.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default About;
