import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import { KraikubLogo } from "../../components/svg/KraikubLogo";
import { DevelopersBanner } from "./components/DevelopersBanner";
import { ManageBanner } from "./components/ManageBanner";
import { NontsriAccountBanner } from "./components/NonsriAccountBanner";
import { SimpleFadeIn } from "../../components/animations/SimpleFadeIn";
import { Footer } from "../../layouts/Footer";

export const HomePage: NextPage = () => {
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          paddingY: "40px",
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          {/* <SimpleFadeIn> */}
          <Stack
            direction="row"
            alignItems="start"
            spacing="12px"
            justifyContent="center"
          >
            <img
              src="/icons/kraikub-icon.svg"
              style={{
                display: "inline",
                height: 50,
                paddingTop: "10px",
              }}
              alt="kraikub-icon"
            />
            <Box textAlign="start">
              <Typography variant="h5" fontSize={50} fontWeight={600} className="letter-spacing-1">
                KRAIKUB
              </Typography>
            </Box>
          </Stack>
          <Typography fontWeight={400} fontSize={14}>AUTH PROVIDER FOR KASETSART UNIVERSITY</Typography>
          {/* <Button size="small" variant="contained" color="secondary" sx={{
            my: 3,
          }}>Soon 2023</Button> */}
          <Typography fontWeight={600} mt={4}>Comming Soon 2023.</Typography>
        </Box>
      </Container>

      {/* <SimpleFadeIn>
        <ManageBanner />
      </SimpleFadeIn>
      <NontsriAccountBanner />
      <DevelopersBanner /> */}
      <Footer />
    </>
  );
};
