import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="100px" bgcolor="#FFF3F4">
      <Stack gap="40px" alignItems="center" px="40px" pt="20px">
        <img src={Logo} alt="logo" width="200px" height="45px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Made with <span style={{ color: "red" }}>❤</span> by Amir Alijani
          (Kebrit)
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
