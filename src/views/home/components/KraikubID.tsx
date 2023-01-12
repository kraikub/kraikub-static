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
import { SimpleFadeIn } from "../../../components/animations/SimpleFadeIn";
import { SimepleCard } from "../../../components/card/SimpleCard";

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
        py: "30vh",
      }}
    >
      <Container
        sx={{
          minHeight: "100vh",
        }}
      >
        <Box>
          <Stack alignItems="start" spacing="60px">
            <Grid container sx={{ width: "100%", rowGap: "40px" }}>
              <Grid item xs={12} sm={12} md={5} lg={5}>
                <Typography
                  variant="h2"
                  fontWeight={700}
                  letterSpacing="-2px"
                  sx={{
                    fontSize: {
                      xs: "60px",
                      sm: "3.2em",
                    },
                  }}
                >
                  บัญชีมหาวิทยาลัยเกษตรศาสตร์
                </Typography>
                <Box my={4}>
                  <Typography variant="body1">
                    บัญชีมหาวิทยาลัยเกษตรศาสตร์ (บัญชีนนทรี)
                    เวอร์ชันอัพเกรดที่จะทำให้คุณสามารถนำบัญชีมหาวิทยาลัยของคุณไปใช้ประโยชน์กับเว็บไซต์อื่นๆได้อย่างง่ายดาย
                  </Typography>
                </Box>
                <Stack
                  direction="row"
                  spacing={{
                    xs: 0,
                    sm: 1,
                  }}
                  rowGap={1}
                  flexWrap="wrap"
                >
                  <Box
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "auto",
                      },
                    }}
                  >
                    <a
                      href="https://app.kraikub.com/id"
                      style={{
                        width: "100%",
                      }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "100%",
                            md: "auto",
                          },
                          gap: 1,
                          fontWeight: 600,
                          fontSize: 18,
                          transition: "300ms ease",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        ลองใช้ Kraikub ID เลย
                        <IoIosArrowRoundForward size="30px" />
                      </Button>
                    </a>
                  </Box>
                  <Box
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "auto",
                      },
                    }}
                  >
                    <a
                      href="https://app.kraikub.com/signup"
                      style={{
                        width: "100%",
                      }}
                    >
                      <Button
                        color="secondary"
                        variant="outlined"
                        size="large"
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "100%",
                            md: "auto",
                          },
                          gap: 1,
                          fontWeight: 600,
                          fontSize: 18,
                          transition: "300ms ease",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        สมัครในนามบุคคลภายนอก
                      </Button>
                    </a>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={12} md={7} lg={7} textAlign="center">
                <img
                  src="/home-image-1.png"
                  width="100%"
                  style={{
                    maxWidth: "800px",
                  }}
                />
              </Grid>
            </Grid>
          </Stack>
        </Box>
        <Stack my="200px" spacing="100px">
          <SimpleFadeIn>
            <SimepleCard
              sx={{
                p: {
                  xs: "12px",
                  sm: "18px",
                  md: "30px",
                },
                borderRadius: {
                  xs: "8px",
                  sm: "18px",
                  md: "26px",
                },
              }}
            >
              <Stack spacing={4}>
                <Typography variant="h4">ใช้ได้ทุกที่บนอินเตอร์เน็ต</Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }} fontSize={20}>
                  ด้วย Kraikub ID
                  คุณสามารถนำบัญชีมหาวิทยาลัยเกษตรศาสตร์ของคุณไปใช้งานบนเว็บไซต์อื่นๆที่รองรับได้ทันที
                  ด้วยมาตรฐาน OAuth 2.0 และ OpenID Connect
                </Typography>
                <img src="/sign-in-with-ku.png" />
              </Stack>
            </SimepleCard>
          </SimpleFadeIn>
          <SimpleFadeIn>
            <SimepleCard
              sx={{
                p: {
                  xs: "12px",
                  sm: "18px",
                  md: "30px",
                },
                borderRadius: {
                  xs: "8px",
                  sm: "18px",
                  md: "26px",
                },
              }}
            >
              <Stack spacing={4}>
                <Typography variant="h4">ปลอดภัย เกินกว่าใคร</Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }} fontSize={20}>
                  ด้วยระบบการยืนยันตัวตนสองชั้น (Two-factor Authentication)
                  ทำให้การใช้งานบัญชีของคุณปลอดภัยจากผู้ที่ไม่ประสงค์ดี
                </Typography>
                <img src="/2fa.png" />
              </Stack>
            </SimepleCard>
          </SimpleFadeIn>
        </Stack>
      </Container>
    </Box>
  );
};
