import {
  Box,
  Button,
  ButtonBase,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { KraikubIDGraphic } from "./KraikubIDGraphic";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { GradientLine } from "../../../../components/svg/GradientLine";
import { useContrastNavbar } from "../../../../hooks/useContrastNavbar";
import { useRef } from "react";
import { SimpleFadeIn } from "../../../../components/animations/SimpleFadeIn";
export const KraikubIDBanner = () => {
  const ref = useRef<Element>(null);
  const isActive = useContrastNavbar(ref, "#fff");
  return (
    <Box
      id="kraikub-id"
      ref={ref}
      sx={{
        backgroundColor: "#000",
      }}
    >
      <Container
        sx={{
          py: "400px",
          color: "#fff",
        }}
      >
        <Box>
          <SimpleFadeIn>
            <Typography variant="h2" className="letter-spacing-2">
              Kraikub ID
            </Typography>
          </SimpleFadeIn>
          <SimpleFadeIn delay={0.3}>
            <Typography variant="h6" mt="20px" fontWeight={400}>
              Account มหาวิทยาลัยเวอร์ชันอัพเกรด
              ยกระดับประสบการณ์การใช้งานอินเตอร์เน็ต
            </Typography>
          </SimpleFadeIn>
        </Box>
        <SimpleFadeIn delay={0.4} duration={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <KraikubIDGraphic width="100%" />
          </Box>
        </SimpleFadeIn>
        <Box
          sx={{
            my: "300px",
          }}
        >
          <SimpleFadeIn>
            <Typography variant="h3" fontWeight={400}>
              นี่คือ Account มหาวิทยาลัยรูปแบบใหม่
            </Typography>
          </SimpleFadeIn>
          <SimpleFadeIn delay={0.2}>
            <Typography
              mt={4}
              variant="h6"
              fontWeight={400}
              sx={{
                opacity: 0.6,
              }}
            >
              Kraikub ID คือ ระบบ Account ที่พัฒนาขึ้นมาจาก บัญชีนนทรี (Nontsri
              Account) ของมหาวิทยาลัยเกษตรศาสตร์
              ซึ่งมอบประสบการณ์รูปแบบใหม่ให้กับการใช้งานอินเตอร์เน็ตในยุคของเศรษฐกิจดิจิทัล
            </Typography>
          </SimpleFadeIn>
          <SimpleFadeIn delay={0.2}>
            <Box
              sx={{
                my: 5,
              }}
            >
              <ButtonBase
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  borderRadius: "1000px",
                  height: "70px",
                  px: "50px",
                  fontSize: "18px",
                  gap: 2,
                }}
              >
                เริ่มต้นใช้งาน <ArrowForwardIcon fontSize="inherit" />
              </ButtonBase>
            </Box>
          </SimpleFadeIn>
        </Box>
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
                  Personal Data Protection
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  color="inherit"
                  sx={{ opacity: 0.6 }}
                >
                  ปกป้องข้อมูลส่วนตัวของคุณ โดยทุกครั้งที่คุณใช้ Sign in with KU
                  ระบบจะแจ้งคุณเสมอว่ามีข้อมูลส่วนตัวใดบ้างที่จะถูกแชร์ให้กับแอปพลิเคชันหรือเว็บไซต์ใดๆ
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" className="letter-spacing-1">
                  Push Notification
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  color="inherit"
                  sx={{ opacity: 0.6 }}
                >
                  ระบบแจ้งเตือนกิจกรรมต่างๆที่เกี่ยวกับ Kraikub ID ของคุณ
                  เช่นแจ้งเตื่อนทุกครั้งที่มีการเข้าสู่ระบบเกิดขึ้น
                  ดังนั้นคุณจะมั่นใจได้ว่า Kraikub ID ของคุณนั้นจะปลอดภัย
                  และอนู่ในการควบคุมของคุณเพียงคนเดียวเท่านั้น
                </Typography>
              </Grid>
            </Grid>
          </SimpleFadeIn>
        </Container>
      </Container>
    </Box>
  );
};
