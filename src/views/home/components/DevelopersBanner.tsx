import { Box, Button, Container, Link, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { SimpleFadeIn } from "../../../components/animations/SimpleFadeIn";
export const DevelopersBanner = () => {
  return (
    <Box
      sx={{
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
            position: "relative",
          }}
        >
          <Box>
            <Box mb={3}>
              <SimpleFadeIn>
                <Typography variant="h3">
                  คุณเป็น Developers ใช่ ไหม?
                </Typography>
              </SimpleFadeIn>
            </Box>
            <Box>
              <Box mb={4}>
                <SimpleFadeIn delay={0.3}>
                  <Typography variant="body1">
                    Kraikub
                    ช่วยให้คุณสามารถยืนยันตัวตนของผู้ใช้งานของคุณที่มาจากมหาวิทยาลัยเกษตรศาสตร์ได้
                  </Typography>
                </SimpleFadeIn>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    maxWidth: "440px",
                  }}
                >
                  <SimpleFadeIn delay={0.5}>
                    <Typography variant="body1">
                      ด้วยระบบ OAuth 2.0 พร้อมกับ SDK ที่ Kraikub
                      สร้างขึ้นมาเพื่อนักพัฒนาโดยเฉพาะ
                      ทำให้คุณสามารถนำแอปพิลเคชันมาเชื่อมต่อได้อย่างง่ายดาย
                    </Typography>
                  </SimpleFadeIn>
                  <SimpleFadeIn delay={0.7}>
                    <Link
                      underline="none"
                      href="https://app.kraikub.com/signin?client_id=7267700f83a8066dd55505a9512e2073&scope=2&state=https://app.kraikub.com/projects/manager&dev=false&redirect_uri=https://app.kraikub.com/auth/callback&"
                    >
                      <Button
                        sx={{
                          marginY: "40px",
                          height: "60px",
                          gap: 2,
                        }}
                      >
                        เริ่มต้นเชื่อมต่อแอปพลิเคชัน{" "}
                        <EastIcon fontSize="inherit" />
                      </Button>
                    </Link>
                  </SimpleFadeIn>
                </Box>
                <Box
                  sx={{
                    width: "50%",
                    minWidth: "350px",
                  }}
                >
                  <SimpleFadeIn delay={0.6}>
                    <img
                      src="/dev-min.png"
                      width="100%"
                      alt="developers-illustration"
                    />
                  </SimpleFadeIn>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box></Box>
          <Box
            my={10}
            sx={{
              textAlign: "center",
            }}
          >
            <Typography variant="h6" mb={2}>
              ขอบคุณที่สนใจ kub 😊
            </Typography>
            <Typography variant="body2">
              เราหวังว่า Kraikub
              จะเปิดโอกาสให้ทุกๆคนในมหาวิทยาลัยเกษตรศาสตร์มีโอกาสในการใช้ซอฟต์แวร์เพื่อพัฒนามหาวิทยาลัยของเรา
              💪🏻
            </Typography>
            <Typography variant="body2" mt={2}>
              Made by Computer Engineering student, Kasetsart University.
            </Typography>
            <Typography variant="body2" mt={2}>
              © 2022, Nutchanon Chantrasup
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
