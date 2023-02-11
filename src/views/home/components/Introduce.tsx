import { Image } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const usageImageUrls = [
  "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1554672408-17407e0322ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
];

const externalArticles = [
  {
    title: "OAuth 2.0",
    about:
      "เกี่ยวกับ Protocol การแลกเปลี่ยนข้อมูลการยืนยันตัวตนจากระบบภายนอก ยกตัวอย่างเช่นระบบของคุณจะแลกเปลี่ยน Credentials ที่สำคัญต่างๆกับระบบของ Kraikub อย่างปลอดภัยได้อย่างไร",
    url: "https://oauth.net/2/",
  },
  {
    title: "OpenID Connect",
    about:
      "มาตรฐานการออก Token เพื่อยืนยันตัวตนของผู้ใช้งาน โดย OpenID Connect ใช้ Token ที่ถูกเข้ารหัสในรูปแบบของ JSON Web Token (JWT) และมีหัวข้อต่างๆในการบรรยายตัวตนของผู้ใช้งานที่ถูกบรรจุไว้ใน Token นั้นๆ",
    url: "https://openid.net/connect/",
  },
  {
    title: "KRAIKUB",
    about:
      "หากคุณเข้าใจ OAuth 2.0 และ OpenID Connect แล้ว คุณก็พร้อมที่จะใช้ระบบยืนยันตัวตนของ Kraikub แล้ว",
    url: "https://openid.net/connect/",
  },
];

export default function Introduce() {
  const theme = useTheme();
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: "140px",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={2} rowSpacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            py: 4,
          }}
        >
          <Stack spacing={4}>
            <Typography variant="h3">
              เข้าสู่ระบบเว็บไซต์ใดๆด้วยบัญชีมหาวิทยาลัยเกษตรศาสตร์
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: 18,
                my: 2,
              }}
            >
              ยืนยันตัวตนนิสิตมหาวิทยาลัยเกษตรศาสตร์ด้วยมาตารฐาน OpenID Connect
              เพื่อรองรับนิสิตเกษตรศาสตร์บนเว็บไซต์และแอปพลิเคชันของคุณ
            </Typography>
            <Link href="https://app.kraikub.com">
            <a>
            <Box>
              <Button
                size="large"
                variant="contained"
                sx={{
                  height: "60px",
                  fontSize: 18,
                  gap: 1,
                }}
              >
                นิสิตเกษตรใช้งานได้ทันที <IoIosArrowRoundForward />
              </Button>
            </Box>
            </a>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="/static/home/screenshot-1.png" width="100%" />
        </Grid>
      </Grid>
      <Box my="200px">
        <Stack spacing={2}>
          <Typography variant="h4">จะใช้เครื่องไหนก็ปลอดภัย</Typography>
          <Typography variant="body1" fontSize={18}>
            เราใส่ใจกับความปลอดภัยของบัญชีมหาวิทยาลัยเกษตรศาสตร์ของคุณสุดๆ
            Kraikub
            มีระบบยืนยันตัวตนสองชั้นที่จะคอยปกป้องบัญชีของคุณให้ปลอดภัยจากผู้ไม่หวังดีอยู่เสมอ
          </Typography>
        </Stack>
        <Grid container spacing={1} rowSpacing={1} my="40px">
          {usageImageUrls.map((each, index) => {
            return (
              <Grid item xs={12} sm={4} key={`usage-${index}`}>
                <Box
                  sx={{
                    backgroundImage: `url(${each})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    borderRadius: "10px",
                    boxShadow: "10px 10px 10px #0000001a",
                    transform: {
                      xs: "none",
                      sm: index % 2 == 1 ? "translateY(20px)" : "none",
                    },
                    height: {
                      xs: "200px",
                      sm: "70vh",
                    },
                  }}
                ></Box>
              </Grid>
            );
          })}
        </Grid>
        <Box textAlign="center">
          <Typography variant="body2">
            ไม่ว่าอุปกรณ์รูปแบบไหน ก็ใช้งานได้อย่างปลอดภัย
          </Typography>
        </Box>
      </Box>

      <Box my="100px">
        <Stack spacing={2}>
          <Typography variant="h4">ใช้งานง่าย พัฒนาก็ง่าย</Typography>
          <Typography variant="body1" fontSize={18}>
            ด้วยมาตรฐานระบบแบบ OAuth 2.0 และ OpenID Connect
            ทำให้นักพัฒนาสามารถใช้งานระบบยืนยันตัวตนของ Kraikub
            ร่วมกับเว็บไซต์และแอปพลิเคชันของพวกเขาได้อย่างง่ายดาย
          </Typography>
          <Box>
            <Link href="https://app.kraikub.com/signup">
              <a>
                <Button
                  size="large"
                  color="secondary"
                  variant="contained"
                  sx={{
                    height: "60px",
                    fontSize: 18,
                    gap: 1,
                  }}
                >
                  สมัครบัญชีในนามผู้ใช้ภายนอก <IoIosArrowRoundForward />
                </Button>
              </a>
            </Link>
          </Box>
        </Stack>
        <Box mt="60px">
          <Typography variant="h6">
            ลองทำความเข้าใจหัวข้อพวกนี้ดูสิ คุณจะสามารถใช้ Kraikub กับ
            ระบบของคุณได้!
          </Typography>
        </Box>
        <Grid container spacing={1} rowSpacing={1} my="30px">
          {externalArticles.map((each, index) => {
            return (
              <Grid item xs={12} sm={4} key={`external-art-card-${index}`}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "8px",
                    boxShadow: "0 0 10px #00000016",
                    minHeight: "40vh",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <Box width="100%">
                    <Typography variant="h6">{each.title}</Typography>
                    <Typography variant="body2" mt={2}>
                      {each.about}
                    </Typography>
                  </Box>
                  <Stack direction="row" justifyContent="end">
                    <Link href={each.url}>
                      <a>
                        <Button
                          size="small"
                          variant="text"
                          color="secondary"
                          sx={{
                            gap: 1,
                            color: theme.palette.text.primary,
                          }}
                        >
                          เรียนรู้ {each.title}{" "}
                          <IoIosArrowRoundForward size="20px" />
                        </Button>
                      </a>
                    </Link>
                  </Stack>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
