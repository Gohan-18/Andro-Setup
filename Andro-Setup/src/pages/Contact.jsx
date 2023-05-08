import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SetupState } from "../SetupContext";
import SendIcon from "@mui/icons-material/Send";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xknayzno");
  const { activeFilter, setActiveFilter, navbarState, setNavbarState, formData, setFormData } = SetupState();
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: ""
  // })

  // console.log(formData)

  useEffect(() => {
    setActiveFilter("Contact");
    setNavbarState(false);
  }, []);

  if (state.succeeded) {
    console.log('Thanks for your message...');
    setFormData({
      name: "",
      email: "",
      message: ""
    })
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          px: "10px",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "30px", md: "35px" },
            fontWeight: 600,
            color: "#D05270",
            borderBottom: "4px solid #D05270",
            px: "10px",
          }}
        >
          Contact Me
        </Typography>
        <form onSubmit={handleSubmit} className="form-style">
          <TextField
            required
            label="Name"
            type="text"
            fullWidth
            name="Name"
            autoComplete="off"
            value={formData?.name}
            onChange={(e) => setFormData((prev) => ({...prev, name: e.target.value}))}
          />
          <TextField
            required
            label="Email"
            type="Email"
            fullWidth
            name="email"
            value={formData?.email}
            onChange={(e) => setFormData((prev) => ({...prev, email: e.target.value}))}
          />
          <TextField
            autoComplete="off"
            name="Message"
            required
            label="Message..."
            type="text"
            multiline
            maxRows={4}
            minRows={4}
            fullWidth
            value={formData?.message}
            onChange={(e) => setFormData((prev) => ({...prev, message: e.target.value}))}
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            fullWidth
          >
            Send
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Contact;
