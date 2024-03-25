import { Box, Typography } from "@mui/material";
import Buttons from "./Buttons";
import designerImage from "../images/designer_1.png";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

const About = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} justifyContent="center" columns={16}>
          <Grid item xs={8}>
            <Box>
              <Typography sx={{ fontSize: 36, width: 540, height: 48 }}>
                {" "}
                Light, Fast & Powerful
              </Typography>
              <Typography sx={{ fontSize: 16, width: 540, height: 140 }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </Typography>

              <Stack>
                <Box>
                  <img src="" alt="" />
                </Box>
              </Stack>
            </Box>
          </Grid>
          {/* second */}
          <Grid item xs={8}>
            <Box></Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
