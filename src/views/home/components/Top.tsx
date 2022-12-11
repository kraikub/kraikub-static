import { Container, Grid, Typography, Button, Box, useTheme } from "@mui/material";

export const Top = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        pt: "20vh",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h2"
              sx={{
                letterSpacing: "-2px",
                fontWeight: 700,
              }}
            >
              Stay signed in on any websites
            </Typography>
            <Typography variant="h4" mt={4}>
              with your Kasetsart account.
            </Typography>
            <Box my={6}>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  height: "60px",
                }}
              >
                Use with your website now
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} display="flex" justifyContent="center">
            <img src="/home-logo.svg" width="80%" />
          </Grid>
        </Grid>
        <Box my="30vh">
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" letterSpacing={-1}>
                Bring this button to your apps.
              </Typography>
              <Typography my={3} color={theme.palette.text.secondary}>
                Sign in with KU navigates your users to our authentication
                server and once your users are signed in, you get their
                identities.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  height: "80px",
                  padding: "30px",
                  fontWeight: 600,
                  fontSize: "1.5rem",
                  boxShadow: "0 10px 20px #00000030"
                }}
              >
                Sign in with KU
              </Button>
            </Grid>
          </Grid>
          <Box mt={9}>
            <Typography variant="h4" letterSpacing={-1}>
              More about Sign in with KU
            </Typography>
            <Typography my={3} color={theme.palette.text.secondary}>
              Sign in with KU is base on OAuth 2.0 protocol and supports OpenID
              Connect. All client applications can be create at app.kraikub.com.
              Get 3 free apps for any KU students.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
