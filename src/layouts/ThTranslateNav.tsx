import { Box, Container, Typography } from "@mui/material";

export const ThTranslateNav = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#26c73b",
        color: "#fff",
      }}
    >
      <Container sx={{
        py: 2,
      }}>
        <Typography color="inherit" fontSize={14}>
          ต้องการดูหน้านี้เป็นภาษาไทยไหม?
        </Typography>
      </Container>
    </Box>
  );
};
