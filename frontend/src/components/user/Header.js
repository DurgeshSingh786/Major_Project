import React from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
const header = () => {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mocklify
          </Typography>
          <Button color="inherit">Log in</Button>
          <Button variant="outlined" color="inherit">
            sign up
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default header;
