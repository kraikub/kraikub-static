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
            Discover Kraikub services
          </Typography>
          <Typography variant="body1" mt={2}>
            บริการจาก Kraikub
          </Typography>
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
                    borderRadius: "14px",
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
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      zIndex: 31,
                      backgroundImage: "url(/kraikub-bg-1a.svg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      zIndex: 35,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "30px",
                    }}
                  >
                    <Box textAlign="center">
                      <Typography
                        variant="h3"
                        className="letter-spacing-2"
                        fontWeight={200}
                        color="#ffffff"
                      >
                        <Typography variant="inherit" display="inline" fontWeight={600}>
                        SIGN IN</Typography> WITH KU
                      </Typography>
                      <Typography color="#ffffff" mt={2}>
                        Best sign in method for KU students ever.
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
                    borderRadius: "14px",
                    backgroundImage: "url(/kraikub-bg-1b.svg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
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
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box textAlign="center">
                      <Typography
                        variant="h3"
                        className="letter-spacing-2"
                        fontWeight={300}
                        color="#ffffff"
                      >
                        <Typography variant="inherit" display="inline" fontWeight={600}>
                        KRAIKUB</Typography> ID
                      </Typography>
                      <Typography color="#ffffff" mt={2}>
                        Your new university account.
                      </Typography>
                    </Box>
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
