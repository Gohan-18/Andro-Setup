import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Navbar />
          <div>
            <CssBaseline />
            <Outlet />
          </div>
        </Container>
        <Footer/>
      </ThemeProvider>
    </>
  );
};

export default Layout;
