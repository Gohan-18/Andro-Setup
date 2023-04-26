import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("");

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
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          py: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            gap: 2,
          }}
        >
          <Typography
            onClick={() => navigate("/")}
            sx={{
              fontSize: "25px",
              fontWeight: "600",
              color: "#424242",
              cursor: "pointer",
            }}
          >
            Andro/Setup
          </Typography>

          <Box
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
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
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
    </>
  );
};

export default Navbar;
