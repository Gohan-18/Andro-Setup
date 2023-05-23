import { Box, Container, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";
import SegmentRoundedIcon from "@mui/icons-material/SegmentRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { SetupState } from "../SetupContext";
import Link from "@mui/material/Link";

const Navbar = () => {
  const navigate = useNavigate();
  const { activeFilter, setActiveFilter, navbarState, setNavbarState } =
    SetupState();

  useEffect(() => {
    setActiveFilter("Home");
  }, []);

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          zIndex: 50,
          position: "fixed",
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100px",
          backgroundColor: "#fff",
          top: "0",
          left: "0",
          right: "0",
          py: "10px",
          borderBottom: "3px solid #D05270",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "space-between",
              sm: "start",
            },
            height: "100%",
            gap: 2,
            px: {
              xs: "10px",
              sm: "0px",
            },
            width: "100%",
          }}
        >
          <Typography
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
            sx={{
              fontSize: {
                xs: "22px",
                md: "25px",
              },
              fontWeight: "600",
              color: "#424242",
              cursor: "pointer",
            }}
          >
            Andro/Setup
          </Typography>

          <IconButton
            onClick={() => setNavbarState(!navbarState)}
            sx={{
              display: {
                xs: "flex",
                sm: "none",
              },
            }}
          >
            {navbarState ? (
              <CloseRoundedIcon sx={{ width: "28px", height: "28px" }} />
            ) : (
              <SegmentRoundedIcon sx={{ width: "28px", height: "28px" }} />
            )}
          </IconButton>

          <Link
            href="https://www.linkedin.com/in/prabhat187"
            target="_blank"
            sx={{
              backgroundColor: "#5A47AB",
              color: "#FFFFFF",
              py: "5px",
              display: {
                xs: "none",
                sm: "flex",
              },
              alignItems: "center",
              justifyContent: "center",
              height: "auto",
              pr: "10px",
              pl: "2px",
              cursor: "pointer",
              position: "relative",
              ml: "5px",
              borderRadius: "2px",
            }}
          >
            <Box
              sx={{
                height: "17px",
                width: "17px",
                backgroundColor: "#5A47AB",
                position: "absolute",
                left: -8,
                transform: "rotate(45deg)",
                zIndex: -1,
              }}
            />
            <LinkedInIcon sx={{ height: "15px", width: "15px" }} />
            <Typography
              sx={{
                ml: "4px",
                textAlign: "center",
                fontSize: "8px",
                color: "#ffffff",
                lineHeight: "6px",
              }}
            >
              Hire Me!!
            </Typography>
          </Link>
        </Box>

        <Box
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          {["Home", "About", "Contact"].map((item) => {
            let currentItm = activeFilter === item;
            return (
              <Typography
                onClick={() => {
                  setActiveFilter(item);
                  if (item === "Home") {
                    navigate("/");
                  } else {
                    navigate(`/${item}`);
                  }
                }}
                sx={{
                  cursor: "pointer",
                  color: !currentItm ? "#424242" : "#5A47AB",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  fontWeight: "700",
                }}
                key={item}
              >
                {item}
              </Typography>
            );
          })}
        </Box>
      </Container>
      <Box
        sx={{
          display: {
            xs: "flex",
            sm: "none",
          },
          justifyContent: "center",
          alignItems: "center",
          gap: navbarState ? 3 : 0,
          flexDirection: "column",
          height: navbarState ? "100vh" : "0px",
          width: "100%",
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: "#fff",
          transition: "all 500ms",
          borderBottom: "4px solid #D05270",
          zIndex: 25,
        }}
      >
        {["Home", "About", "Contact"].map((item) => {
          let currentItm = activeFilter === item;
          return (
            <Typography
              onClick={() => {
                setActiveFilter(item);
                if (item === "Home") {
                  navigate("/");
                  window.scrollTo(0, 0);
                } else {
                  navigate(`/${item}`);
                }
              }}
              sx={{
                cursor: "pointer",
                color: !currentItm ? "#424242" : "#5A47AB",
                fontSize: "14px",
                textTransform: "uppercase",
                fontWeight: "700",
                // display: navbarState ? 'flex' : 'none'
              }}
              key={item}
            >
              {item}
            </Typography>
          );
        })}
      </Box>
    </>
  );
};

export default Navbar;
