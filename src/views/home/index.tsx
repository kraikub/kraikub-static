import { Box, Button, Container, Typography } from "@mui/material";
import { NextPage } from "next";
import { DevelopersBanner } from "./components/DevelopersBanner";
import { ManageBanner } from "./components/ManageBanner";
import { NontsriAccountBanner } from "./components/NonsriAccountBanner";

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
          <Typography
            variant="h4"
            sx={{
              fontSize: {
                xs: 24,
                sm: 30,
                md: 36,
                lg: 40,
              },
            }}
            my={2}
          >
            Account รูปแบบใหม่
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: {
                xs: 24,
                sm: 30,
                md: 36,
                lg: 40,
              },
            }}
          >
            สำหรับนิสิตมหาวิทยาลัยเกษตรศาสตร์
          </Typography>
        </Box>
      </Container>
      <ManageBanner />
      <NontsriAccountBanner />
      <DevelopersBanner />
    </>
  );
};
