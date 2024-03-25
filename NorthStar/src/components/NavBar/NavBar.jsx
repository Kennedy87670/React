import React from "react";
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import DehazeIcon from "@mui/icons-material/Dehaze";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  return (
    <AppBar
      position="static"
      sx={{
        height: 111,
        justifyContent: "center",
        background: "#fff",
        color: "#222",
      }}
    >
      <StyledToolbar>
        <Typography variant="h6"> NorthStar</Typography>
        <Box>
          <List sx={{ display: "flex", gap: 6 }}>
            <ListItem>
              <Typography>HOME</Typography>
            </ListItem>
            <ListItem>
              <Typography> ABOUT</Typography>
            </ListItem>
            <ListItem>
              <Typography> CONTACT US</Typography>
            </ListItem>
          </List>
        </Box>

        <Box sx={{ display: "flex", gap: 3 }}>
          <PersonIcon />
          <Badge badgeContent={4}>
            <LocalMallIcon />
          </Badge>
          <DehazeIcon />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
