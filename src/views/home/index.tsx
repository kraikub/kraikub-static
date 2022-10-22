import { Box, Button, Container, Typography } from "@mui/material";
import { NextPage } from "next";
import { KraikubLogo } from "../../components/svg/KraikubLogo";
import { DevelopersBanner } from "./components/DevelopersBanner";
import { ManageBanner } from "./components/ManageBanner";
import { NontsriAccountBanner } from "./components/NonsriAccountBanner";
import { SimpleFadeIn } from "../../components/animations/SimpleFadeIn";

export const HomePage: NextPage = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          paddingY: "40px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <SimpleFadeIn>
            <Typography variant="h3" my={2}>
              บัญชีเดียว
            </Typography>
            <Typography variant="h3">
              สำหรับนิสิตมหาวิทยาลัยเกษตรศาสตร์
            </Typography>
          </SimpleFadeIn>
          <Box
            sx={{
              my: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SimpleFadeIn delay={0.3}>
              <KraikubLogo width="260px" />
            </SimpleFadeIn>
          </Box>
        </Box>
      </Container>
      {/* <Strip width="100%"/> */}

      <SimpleFadeIn>
        <ManageBanner />
      </SimpleFadeIn>

      <NontsriAccountBanner />
      <DevelopersBanner />
    </>
  );
};
