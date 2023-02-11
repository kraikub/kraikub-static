import { Container, Box, Typography, Button, Stack } from "@mui/material";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
export const Contribute = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://github.blog/wp-content/uploads/2020/12/wallpaper_header_4Kultra_wide_21_9.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "#000000",
        position: "relative",
        height: "80vh",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background:
            "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.61082370448179273) 100%)",
        }}
      >
        <Container
          sx={{
            color: "#fff",
            py: "70px",
            textAlign: "center",
          }}
        >
          <Stack alignItems="center" spacing={2} mb="40px">
            <Typography variant="h4">Contributions welcome</Typography>
            <Typography fontWeight={500} fontSize={20}>
              {"PRs are welcome. Let's make Kraikub better together."}
            </Typography>
          </Stack>
          <Link href="https://github.com/kraikub">
            <a>
              <Button
                sx={{
                  backgroundColor: "#ffffff30",
                  backdropFilter: "blur(10px)",
                  height: "60px",
                  paddingX: "30px",
                  fontSize: 16,
                  color: "#fff",
                  gap: 1,
                  transition: "300ms ease",
                  "&:hover": {
                    background: "#ffffffc0",
                    color: "#000000",
                    transform: "scale(1.06)",
                  },
                }}
              >
                Visit on GitHub <BsGithub size="20px" />
              </Button>
            </a>
          </Link>
        </Container>
      </Box>
    </Box>
  );
};
