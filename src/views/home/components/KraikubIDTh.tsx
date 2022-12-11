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
    title: "เข้าสู่ระบบด้วย KU",
    description:
      "เข้าสู่ระบบเว็บไซต์หรือแอปพลิเคชันต่างๆด้วยบัญชีมหาวิทยาลัยเกษตรศาสตร์ สำหรับนักพัฒนา คุณจะได้ข้อมูลและตัวตนของผู้ใช้งานของคุณ",
  },
  {
    title: "ความปลอดภัยสองชั้น",
    description:
      "ปกป้องบัญชีข้องคุณด้วยระบบความปลอดภัยสองชั้น เรามั่นใจว่าคุณจะปลอดภัย",
  },
  {
    title: "ความเป็นส่วนตัว",
    description:
      "เมื่อคุณเข้าสู่ระบบผ่าน Kraikub เราจะแจ้งเตือนคุณเกี่ยวกับรายละเอียดของข้อมูลส่วนบุคคลของคุณที่จะถูกแชร์ให้กับผู้พัฒนาแอปพลิเคชันเสมอ",
  },
  {
    title: "การแจ้งเตือน",
    description:
      "แจ้งเตือนผ่านอีเมบไปหาคุณโดยตรง ทุกครั้งที่บัญชีของคุณมีความเคลื่อนไหวบนอินเตอร์เน็ต",
  },
  {
    title: "ไร้การสมัคร",
    description:
      "คุณสามารถเริ่มต้นใช้ Kraikub ได้ด้วยบัญชีนนทรีของมหาวิทยาลัยเกษตรศาสตร์ได้ทันที ง่านใช่ไหมหละ",
  },
];

export const KraikubIDTh = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: "80px",
        background:
          "radial-gradient(circle, rgba(234,255,242,1) 0%, rgba(209,255,232,1) 14%, rgba(0,0,0,0) 54%)",
      }}
    >
      <Container>
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
              มาตรฐานใหม่ของบัญชีมหาวิทยาลัย
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">
              บัญชีมหาวิทยาลัยเกษตรศาสตร์เวอร์ชันอัพเกรด
            </Typography>
          </Box>
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
            Kraikub ID เร็วๆนี้
            <IoIosArrowRoundForward size="30px" />
          </Button>
        </Stack>
        <Grid container spacing={4} my={10}>
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
        </Grid>
      </Container>
    </Box>
  );
};
