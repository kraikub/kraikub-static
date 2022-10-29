import { Box, Button, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { gradients, green } from "../../../../styles/colors";

export const ManageBanner = () => {

  const theme = useTheme()

  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 10,
      }}
    >
      <Box sx={{
        background: gradients.green.main,
        color: "white",
        px: "28px",
        py: "40px",
        borderRadius: "20px"
      }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box mb={3}>
              <Typography variant="h4">จัดการบัญชี</Typography>
              <Typography variant="h4">มหาวิทยาลัยเกษตรศาสตร์ของคุณ</Typography>
            </Box>
            <Box mb={4}>
              <Typography variant="body1" color="inherit">
                จัดการความปลอดภัยและความเป็นส่วนตัวของบัญชีมหาวิทยาลัยเกษตรศาสตร์ของคุณ
              </Typography>
            </Box>
            <Stack gap={2} direction="row">
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  height: "60px",
                  gap: 2,
                }}
              >
                เร็วๆนี้
                {/* <EastIcon fontSize="inherit" /> */}
              </Button>
              <Button
                color="secondary"
                sx={{
                  height: "60px",
                  gap: 2,
                }}
              >
                นี่คืออะไร <QuestionMarkIcon fontSize="inherit" />
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <img src="/students.jpg" alt="students" width="100%"></img> */}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
