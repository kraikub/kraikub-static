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
    <Box>
      <Box
        sx={{
          backgroundColor: "#000000",
          color: "#ffffff",
          pt: "14vh",
        }}
      >
        <Container
          sx={{
            minHeight: "100vh",
            py: "10vh",
          }}
        >
          <Stack alignItems="center" spacing={4}>
            <Typography variant="h2">เข้าสู่ระบบเว็บไซต์ไหนก็ได้</Typography>
            <Typography variant="h4">
              ด้วยบัญชี
              <Typography
                display="inline"
                color="#35bda4"
                fontSize="inherit"
                fontWeight="inherit"
              >
                มหาวิทยาลัยเกษตรศาสตร์
              </Typography>
            </Typography>
          </Stack>
          <Stack alignItems="center" spacing={4} my="120px">
            <Box width="100%" maxWidth="500px">
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "80px",
                  px: "30px",
                  py: "10px",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  borderRadius: "10px",
                  boxShadow: "0 0 40px #35bda4c0",
                }}
              >
                Sign in with Kasetsart
              </Box>
              <Typography
                mt={4}
                sx={{
                  opacity: 0.8,
                }}
              >
                ด้วยระบบ Sign in with Kasetsart
                สามารถทำให้คุณนำบัญชีมหาวิทยาลัยเกษตรศาสตร์ไปใช้งานบนเว็บไซต์หรือแอปพลิเคชันต่างๆได้โดยไม่ต้องสมัครใช้งานใหม่
                หากคุณเจอปุ่มนี้อยู่บนเว็บไซต์ใดๆก็ตาม คุณสามารถใช้งานได้ทันที!
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Container
        sx={{
          py: "10vh",
          minHeight: "100vh",
        }}
      >
        <Box>
          <Stack alignItems="start" spacing="30vh">
            <Box>
              <Typography
                variant="h2"
                fontWeight={600}
                letterSpacing="-2px"
                sx={{
                  fontSize: {
                    xs: "60px",
                    sm: "3.2em",
                  },
                }}
              >
                เป็นนิสิตมหาวิทยาลัยเกษตรศาสตร์ใช่หรือไม่?
              </Typography>
              <Box my={4}>
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.8,
                  }}
                >
                  เริ่มต้นใช้งาน Kraikub ได้ทันทีด้วย Username และ Password
                  ของบัญชีมหาวิทยาลัยเกษตรศาสตร์
                </Typography>
              </Box>
              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                alignItems="center"
                spacing={{
                  xs: 0,
                  sm: 2,
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
                <Typography>หรือ</Typography>
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
            </Box>
            <Box>
              <Typography
                variant="h2"
                letterSpacing="-2px"
                sx={{
                  fontSize: {
                    xs: "60px",
                    sm: "3.2em",
                  },
                }}
                fontWeight={600}
              >
                สำหรับนักพัฒนา (Developers)
              </Typography>
              <Box my={4}>
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.8,
                  }}
                >
                  เรียนรู้วิธีการเชื่อมต่อแอปพลิเคชันของคุณกับระบบยืนยันตัวตนของ
                  Kraikub เพื่อให้ผู้ใช้งานของคุณสามารถใช้งาน Sign in with
                  Kasetsart ด้วยมาตรฐาน OAuth 2.0 และ OpenID Connect
                </Typography>
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    mt: 2,
                  }}
                >
                  เรียนรู้ได้ที่นี่
                </Button>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
