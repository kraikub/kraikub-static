import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { TbBellRinging } from "react-icons/tb";
import { IoAnalytics } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
const feats = [
  {
    h: "Nontri",
    t: "สามารถใช้งานบัญชีนนทรีของมหาวิทยาลัยเกษตรศาสตร์กับ Kraikub ได้ทันที",
  },
  {
    h: "2FA",
    t: "ระบบยืนยันตัวตนสองชั้นด้วย OTP",
  },
  {
    h: <TbBellRinging />,
    t: "แจ้งเตือนการเข้าสู่ระบบผ่านอีเมล",
  },
  {
    h: (
      <>
        {"IP Tracking"}
        <IoAnalytics />
      </>
    ),
    hv: "h3" as "h3",
    t: "จดจำที่มาและอุปกรณ์ที่เข้าสู่ระบบ",
  },
  {
    h: (
        <HiUserGroup />
    ),
    t: "ระบบองค์กรสำหรับนักพัฒนามากกว่า 1 คน",
  },
];

export default function Features() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#bffff3",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py: "80px",
        }}
      >
        <Box textAlign="center">
          <Typography variant="h3">มาพร้อมฟีเจอร์เหล่านี้</Typography>
          <Typography variant="body1" mt={2}>
            มาดูความสามารถของ Kraikub
            ที่จะช่วยให้นิสิตเกษตรทุกคนใช้งานโลกอินเตอร์เน็ตง่ายมากขึ้น
          </Typography>
        </Box>
        <Grid container my="100px" spacing={2}>
          {feats.map((each, index) => {
            return (
              <Grid xs={12} sm={4} key={`feat-${index}`}>
                <Box textAlign="center" mb="100px">
                  <Typography variant={each.hv || "h2"}>{each.h}</Typography>
                  <Typography variant="body1" mt={2} fontSize={20}>
                    {each.t}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
