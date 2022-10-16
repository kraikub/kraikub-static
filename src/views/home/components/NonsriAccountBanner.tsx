import { TypeAnimation } from "react-type-animation";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
export const NontsriAccountBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#00000005",
        paddingY: "40px",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          my: 10,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Box mb={3}>
            <Typography variant="h5">
              เริ่มใช้งานได้ทันทีด้วยบัญชีนนทรี
            </Typography>
          </Box>
          <Box mb={4}>
            <Typography variant="body1">
              หากคุณเป็นนิสิตมหาวิทยาลัยเกษตรศาสตร์อยู่แล้ว
              คุณสามารถใช้บัญชีนนทรี (Nontsri Account) เพื่อใช้งาน Kraikub
              ได้ทันที
            </Typography>
          </Box>

          <Box>
            <TypeAnimation
              sequence={[
                "b62••••••••",
                2000,
                "b63••••••••",
                2000,
                "b64••••••••",
                2000,
                "b65••••••••",
                2000,
                "One Account",
                1000,
                "For KU",
                1000,
                "kraikub.com",
                10000,
              ]}
              cursor={false}
              repeat={Infinity}
              wrapper="h1"
              style={{
                fontWeight: 600,
                fontSize: "300%",
                color: "inherit",
                fontFamily: `'Manrope', sans-serif`,
                minHeight: "100px"
              }}
            />
          </Box>
          <Box my={10} sx={{
            textAlign: "start"
          }}>
            <Typography variant="h6" mb={2}>
              Nontsri Account
            </Typography>
            <Typography variant="body2">
              บัญชีนนทรี (Nontsri Account) คือ
              บัญชีของมหาวิทยาลัยเกษตรศาสตร์ที่คุณใช้งานเว็บไซต์อย่างเป็นทางการของมหาวิทยาลัยเกษตรศาสตร์
              เช่น myku
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
