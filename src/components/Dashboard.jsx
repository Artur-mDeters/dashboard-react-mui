import React from "react";
import {
  Typography,
  Toolbar,
  AppBar,
  Box,
  IconButton,
  Tabs,
  Tab,
  
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Dashboard = () => {
  return (
    <>
      <Box>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              IF Clad | Class Advice
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mt:9}}>
        <Tabs>
          <Tab label="Item One" />
          <Tab label="Item One" />
          <Tab label="Item One" />
          <Tab label="Item One" />
        </Tabs>
      </Box>
    </>
  );
};

export default Dashboard;
