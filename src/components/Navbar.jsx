import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
  Button,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";
import User from "./User";

function Navbar() {
  let userId = 5;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Social App
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton component={Link} to="/" color="inherit">
            <Home />
          </IconButton>

          <IconButton component={Link} to={`/users/${userId}`} color="inherit">
            <Avatar alt="Profile" src="/path/to/profile-image.jpg" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
