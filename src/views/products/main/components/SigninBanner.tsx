import { Box, Container, Grid, Typography } from "@mui/material";
import { FC } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { GradientLine } from "../../../../components/svg/GradientLine";
import { SimpleFadeIn } from "../../../../components/animations/SimpleFadeIn";
import { AnimationOnScroll } from "react-animation-on-scroll";

export const SigninBanner: FC = () => {
  return (
    <Box id="sign-in-with-ku">
      <Container
        maxWidth="lg"
        sx={{
          py: "50px",
        }}
      >
        <Box textAlign="center">
          <SimpleFadeIn>
            <Typography
              variant="h3"
              className="letter-spacing-2"
              fontWeight={200}
            >
              <Typography variant="inherit" display="inline" fontWeight={600}>
                SIGN IN
              </Typography>{" "}
              WITH KU
            </Typography>
          </SimpleFadeIn>
          <SimpleFadeIn delay={0.2}>
            <Typography variant="h6" mt="20px" sx={{}}>
              เข้าสู่ระบบเว็บไซต์ด้วยบัญชีมหาวิทยาลัย
            </Typography>
          </SimpleFadeIn>
        </Box>
        <Box my="100px">
          <Grid container spacing={3} rowGap={4}>
            <Grid item xs={12} sm={12} md={8}>
              <SimpleFadeIn delay={0.3}>
                <Typography
                  variant="h6"
                  sx={{
                    mt: "40px",
                    opacity: 0.6,
                  }}
                >
                  ระบบยืนยันตัวตนที่อนุญาติให้แอปพลิเคชันและเว็บไซต์ต่างๆที่ได้รับการอนุมัติจากมหาวิทยาลัยหรือ
                  Kraikub
                  สามารถรองรับผู้ใช้งานที่เป็นนิสิตมหาวิทยาลัยเกษตรศาสตร์ได้ทันที
                </Typography>
              </SimpleFadeIn>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AnimationOnScroll
                  animateIn="animate__headShake"
                  initiallyVisible
                  delay={500}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "200px",
                      height: "200px",
                      backgroundColor: "#61FFB3",
                      borderRadius: "50%",
                      fontSize: "90px",
                      boxShadow: "0 100px 50px #00000030",
                    }}
                  >
                    <ArrowForwardIcon fontSize="inherit" />
                  </Box>
                </AnimationOnScroll>
              </Box>
            </Grid>
          </Grid>
          <Container
            maxWidth="md"
            sx={{
              my: "150px",
            }}
          >
            <SimpleFadeIn>
              <Grid container spacing={2} rowGap={2}>
                <GradientLine />
                <Grid item xs={6}>
                  <Typography variant="h6" className="letter-spacing-1">
                    Zero registeration
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    นิสิตมหาวิทยาลัยเกษตรศาสตร์ทุกคนสามารถเริ่มต้นใช้งาน Sign in
                    with KU ได้ทันที โดยการใช้ บัญชีนนทรี (Nontsri Account)
                    ที่ได้รับจากทางมหาวิทยาลัย
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" className="letter-spacing-1">
                    Free for any KU developers
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    นิสิตมหาวิทยาลัยเกษตรศาสตร์ทุกคนที่ต้องการสร้างและพัฒนาแอปพลิเคชันด้วยระบบ
                    Sign in with KU สามารถเริ่มต้นใช้งานได้ฟรี
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" className="letter-spacing-1">
                    Kraikub SDK
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    เครื่องมือพัฒนาแอปพลิเคชันที่จะช่วยให้คุณสามารถพัฒนาซอฟต์แวร์กับ
                    Kraikub ได้อย่างรวดเร็ว
                  </Typography>
                </Grid>
              </Grid>
            </SimpleFadeIn>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};
