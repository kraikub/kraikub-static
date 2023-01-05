import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";

const features = [
  {
    title: "Sign in with KU",
    description:
      "For web/app developers, sign your users in with Kasetsart student identities. OpenID Connect available.",
  },
  {
    title: "Two-factor Authentication",
    description:
      "Secure your account with Two-factor Authentication. Always receive six digits code which is used for signing your account in.",
  },
  {
    title: "Data privacy",
    description:
      "When you are signing in, you always know how your personal data will be shared and who can access them. Once you give an access, you can revoke anytime.",
  },
  {
    title: "Push notification",
    description:
      "Stay notified everytime your account has an activity on the internet. You will receive notifications via email.",
  },
  {
    title: "Zero registeration",
    description:
      "Start using Kraikub with your Nontri account (from Kasetsart University). No registeration needed.",
  },
];

export const KraikubID = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: "80px",
        background:
          "radial-gradient(circle, rgba(234,255,242,1) 0%, rgba(209,255,232,1) 14%, rgba(0,0,0,0) 54%)",
      }}
    >
      <Container
        sx={{
          minHeight: "100vh",
        }}
      >
        <Stack alignItems="center" spacing="60px">
          <Box
            sx={{
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h2"
              fontWeight={700}
              letterSpacing="-2px"
              sx={{
                fontSize: {
                  xs: "60px",
                  sm: "2.2em",
                  md: "5.1em",
                },
              }}
            >
              บัญชีมหาวิทยาลัยรูปแบบใหม่
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">
              บัญชีมหาวิทยาลัยเกษตรศาสตร์ (บัญชีนนทรี) เวอร์ชันอัพเกรด
            </Typography>
          </Box>
          <a href="https://app.kraikub.com/id">
            <Button
              variant="contained"
              sx={{
                height: "80px",
                px: "30px",
                gap: 1,
                fontWeight: 600,
                fontSize: 18,
                transition: "300ms ease",
                letterSpacing: "-0.03em",
                "&:hover": {
                  transform: "translateY(-10px)",
                  backgroundColor: "#1d6ecc",
                  color: "#fff",
                },
              }}
            >
              เปิดใช้ Kraikub ID เลย
              <IoIosArrowRoundForward size="30px" />
            </Button>
          </a>
        </Stack>
        {/* <Grid container spacing={4} my={10}>
          {features.map((each, index) => {
            return (
              <Grid item xs={12} sm={12} md={4} key={`id-feature-${index}`}>
                <Box
                  sx={{
                    height: "400px",
                    padding: "20px",
                    borderRadius: "16px",
                  }}
                >
                  <Box sx={{}}>
                    <Typography
                      variant="h4"
                      fontWeight={700}
                      letterSpacing="-0.02em"
                    >
                      {each.title}
                    </Typography>
                  </Box>
                  <Typography
                    mt={4}
                    variant="body1"
                    color={theme.palette.text.secondary}
                  >
                    {each.description}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid> */}
      </Container>
    </Box>
  );
};
