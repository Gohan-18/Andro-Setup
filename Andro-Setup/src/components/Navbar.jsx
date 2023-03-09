import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = () => {
  const [activeFilter, setActiveFilter] = useState("");

  useEffect(() => {
    setActiveFilter("Home");
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100px",
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
            sx={{ fontSize: "25px", fontWeight: "600", color: "#424242", cursor: 'pointer' }}
          >
            Andro/Setup
          </Typography>
          <Box sx={{
            backgroundColor: "#5A47AB",
            color: "#FFFFFF",
            py: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'auto',
            px: '10px',
            borderLeft:'1px dotted #666',
            cursor: 'pointer'
          }} >
          <LinkedInIcon sx={{height: '15px', width: '15px',}} />
          <Typography
            sx={{
              ml: '4px',
              textAlign: 'center',
              fontSize: "8px",
              color: "#ffffff",
              lineHeight: '6px',
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
          {["Home", "Portfolio", "Contact"].map((item) => {
            let currentItm = activeFilter === item;
            return (
              <Typography
                onClick={() => setActiveFilter(item)}
                sx={{
                  cursor: "pointer",
                  color: !currentItm ? "#424242" : "#5A47AB",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  fontWeight: '700'
                }}
                key={item}
              >
                {item}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
