import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { SetupState } from "../SetupContext";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  const { activeFilter, setActiveFilter, navbarState, setNavbarState } =
    SetupState();

  useEffect(() => {
    setActiveFilter("Contact");
    setNavbarState(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target;
    console.log(name.value, email.value, message.value)
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
        }}
      >
        <form onSubmit={handleSubmit} className="form-style">
          <TextField required label="Name" type="text" fullWidth name="name" autoComplete="off" />
          <TextField required label="Email" type="email" fullWidth name="email" />
          <TextField
            autoComplete="off"
            name="message"
            required
            label="Message..."
            type="text"
            multiline
            maxRows={4}
            minRows={4}
            fullWidth
          />
          <Button type="submit" variant="contained" endIcon={<SendIcon />} fullWidth>
            Send
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Contact;
