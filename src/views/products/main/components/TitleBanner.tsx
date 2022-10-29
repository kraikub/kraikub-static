import {
  Box,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import { KraikubIDGraphic } from "./KraikubIDGraphic";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SimpleFadeIn } from "../../../../components/animations/SimpleFadeIn";

export const TitleBanner: FC = () => {
  return (
    <Box>
      <Container
        maxWidth="xl"
        sx={{
          py: "100px",
        }}
      >
        <Box textAlign="center">
          <Typography
            variant="h5"
            className="letter-spacing-1"
            fontWeight={500}
          >
            Discover Kraikub products
          </Typography>
          <Typography variant="body1" mt={2}>บริการจาก Kraikub</Typography>
        </Box>
        <Grid container spacing={2} my={10}>
          <Grid item xs={12} sm={12} md={6}>
            <a href="#sign-in-with-ku">
              <SimpleFadeIn>
                <Box
                  sx={{
                    maxHeight: "70vh",
                    height: "70vh",
                    minHeight: "400px",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "6px",
                    backgroundColor: "#f6f6f6",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 18,
                      left: 0,
                      right: 0,
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#000",
                          opacity: "0.5",
                          fontSize: "12px",
                        }}
                      >
                        ระบบยืนยันตัวตนรูปแบบใหม่ของมหาวิทยาลัยเกษตรศาสตร์
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "-60%",
                      left: "18%",
                      zIndex: 31,
                    }}
                  >
                    <img
                      src="/kraikub-sinku-product-wallpaper.png"
                      width="1000px"
                    />
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      zIndex: 35,
                      display: "flex",
                      alignItems: "center",
                      padding: "30px",
                    }}
                  >
                    <Box>
                      <Typography variant="h3" className="letter-spacing-2">
                        Sign in
                      </Typography>
                      <Typography variant="h3" className="letter-spacing-2">
                        with KU
                      </Typography>
                      <Typography variant="h6" mt="20px" sx={{ opacity: 0.6 }}>
                        เข้าสู่ระบบด้วยบัญชี Kasetsart
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </SimpleFadeIn>
            </a>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <a href="#kraikub-id">
              <SimpleFadeIn delay={0.3}>
                <Box
                  sx={{
                    maxHeight: "70vh",
                    height: "70vh",
                    minHeight: "400px",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "6px",
                    background:
                      "linear-gradient(127.66deg, #000000 8.09%, #24423F 108.06%);",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 18,
                      left: 0,
                      right: 0,
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          opacity: "0.5",
                          fontSize: "12px",
                        }}
                      >
                        Kraikub ID คือการพัฒนาบัญชีมหาวิทยาลัย (Nontsri Account)
                        ให้เหมาะกับการใช้งานในยุค Digital Economy
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      zIndex: 35,
                      padding: "30px",
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        color: "#fff",
                      }}
                    >
                      <Typography
                        variant="h4"
                        className="letter-spacing-1"
                        fontWeight={500}
                      >
                        Kraikub ID
                      </Typography>
                      <Typography variant="h6" mt={3} sx={{ opacity: 0.6 }}>
                        Account มหาวิทยาลัยเวอร์ชันอัพเกรด
                      </Typography>
                    </Box>
                    <Stack
                      width="100%"
                      alignItems="center"
                      direction="column"
                      spacing={2}
                      sx={{
                        my: "20px",
                      }}
                    >
                      <KraikubIDGraphic width="100%" />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "70px",
                          height: "70px",
                          backgroundColor: "#61FFB3",
                          borderRadius: "50%",
                        }}
                      >
                        <ArrowForwardIcon />
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </SimpleFadeIn>
            </a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
