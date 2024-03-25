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
import Button from "@mui/material/Button";
import { theme } from "../theme";
import Buttons from "./Buttons";
import Container from "@mui/material/Container";

const NavBar = () => {
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  return (
    <Box
      sx={{
        // marginRight: 0,

        display: "flex",

        justifyContent: "center",
        border: "none",
        boxShadow: "none",
        position: "relative",
      }}
    >
      <AppBar
        position="sticky"
        sx={{ background: "#fff", border: "none", boxShadow: "none" }}
      >
        <StyledToolBar>
          <Box>
            <List>
              <ListItem sx={{ display: "flex", gap: 6 }}>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 14,
                    width: 38,
                    height: 24,
                    color: theme.palette.primary.main,
                  }}
                  variant="h6"
                >
                  Home
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 14,
                    width: 38,
                    height: 24,
                    color: theme.palette.primary.main,
                  }}
                  variant="h6"
                >
                  About
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 14,
                    width: 38,
                    height: 24,
                    color: theme.palette.primary.main,
                  }}
                  variant="h6"
                >
                  Contact
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Box>
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: 26,
                width: 95,
                height: 38,
                color: theme.palette.secondary.main,
              }}
            >
              Landing
            </Typography>
          </Box>

          <Box>
            <Buttons variant="contained">Buy Now</Buttons>
          </Box>
        </StyledToolBar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
