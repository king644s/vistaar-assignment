import { Grid, List, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <List
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/">
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
          </Link>
          <Link to="/address">
            <ListItemButton>
              <ListItemText primary="Address Functionality" />
            </ListItemButton>
          </Link>
          <Link to="/admin">
            <ListItemButton>
              <ListItemText primary="Admin" />
            </ListItemButton>
          </Link>
          <Link to="/pills">
            <ListItemButton>
              <ListItemText primary="Pills" />
            </ListItemButton>
          </Link>
        </List>
      </Grid>
      <Grid item xs={12}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Layout;
