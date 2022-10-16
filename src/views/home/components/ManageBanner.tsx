import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export const ManageBanner = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 10,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box mb={3}>
            <Typography variant="h5">จัดการบัญชี</Typography>
            <Typography variant="h5">มหาวิทยาลัยเกษตรศาสตร์ของคุณ</Typography>
          </Box>
          <Box mb={4}>
            <Typography variant="body1">
              จัดการความปลอดภัยและความเป็นส่วนตัวของบัญชีมหาวิทยาลัยเกษตรศาสตร์ของคุณ
            </Typography>
          </Box>
          <Stack gap={2} direction="row">
            <Button
              variant="contained"
              sx={{
                height: "60px",
                gap: 2,
              }}
            >
              บัญชีของฉัน <EastIcon fontSize="inherit" />
            </Button>
            <Button
              color="secondary"
              variant="contained"
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
          <img src="/students.jpg" alt="students" width="100%"></img>
        </Grid>
      </Grid>
    </Container>
  );
};
