import { Box, Button, Container, Typography } from "@mui/material";
import { NextPage } from "next";
import { KraikubLogo } from "../../components/svg/KraikubLogo";
import { Strip } from "../../components/svg/Strip";
import { DevelopersBanner } from "./components/DevelopersBanner";
import { ManageBanner } from "./components/ManageBanner";
import { NontsriAccountBanner } from "./components/NonsriAccountBanner";
import { AnimationOnScroll } from "react-animation-on-scroll";

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
          <Typography variant="h3" my={2}>
            บัญชีเดียว
          </Typography>
          <Typography variant="h3">
            สำหรับนิสิตมหาวิทยาลัยเกษตรศาสตร์
          </Typography>
          <Box
            sx={{
              my: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <AnimationOnScroll animateIn="animate__zoomIn">
              <KraikubLogo width="260px" />
            </AnimationOnScroll>
          </Box>
        </Box>
      </Container>
      {/* <Strip width="100%"/> */}
      
      <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
        <ManageBanner />
      </AnimationOnScroll>

      <NontsriAccountBanner />
      <DevelopersBanner />
    </>
  );
};
