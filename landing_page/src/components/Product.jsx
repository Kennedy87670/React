import React from "react";
import { Box, Typography } from "@mui/material";
import Buttons from "./Buttons";
import designerImage from "../images/designer_1.png";

const Product = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        position: "relative", // Set the container to relative position
      }}
    >
      <Box>
        <Typography
          sx={{ width: 539, height: 132, fontSize: 50, fontWeight: 500 }}
        >
          Introduce Your Product Quickly & Effectively
        </Typography>
        <Typography sx={{ width: 539, height: 164 }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </Typography>
        <Buttons variant="contained">Purchase UI Kit</Buttons>
        <Buttons variant="outlined">Learn More</Buttons>
        <Buttons variant="outlined">Outlined</Buttons>
      </Box>
      <Box
        sx={{
          position: "absolute", // Set the image box to absolute position
          top: 0, // Align to the top
          right: -50, // Adjust the right position as needed
          zIndex: 3, // Ensure it's above other elements
          // maxWidth:100%
        }}
      >
        <img src={designerImage} alt="Designer" style={{ maxWidth: "100%" }} />
      </Box>
    </Box>
  );
};

export default Product;
