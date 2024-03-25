import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Buttons = ({ variant, children }) => {
  return (
    <Button variant={variant} sx={{ width: 160, height: 26 }}>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: 12,

          color: " #FFFFFF",
        }}
      >
        {children}
      </Typography>
    </Button>
  );
};

export default Buttons;
