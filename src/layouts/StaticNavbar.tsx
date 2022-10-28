import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FC, useRef } from "react";
import { useNavbarControl } from "../hooks/useNavbarControl";

interface NavbarLinkProps {
  text: string;
  href: string;
}

interface StaticNavbarProps {
  sticky?: boolean;
}

const NavbarLink: FC<NavbarLinkProps> = ({ text, href }) => {

  return (
    <Link href={href} color="inherit">
      <a>
        <Typography
          variant="body2"
          sx={{
            color: "inherit",
            opacity: 0.4,
            transition: "200ms ease",
            "&:hover": {
              opacity: 0.8,
            },
          }}
        >
          {text}
        </Typography>
      </a>
    </Link>
  );
};

export const StaticNavbar: FC<StaticNavbarProps> = ({ sticky }) => {

  const { color } = useNavbarControl()

  return (
    <Box
      sx={{
        // backgroundColor: "#ffffffa0",
        position: sticky ? "sticky" : "relative",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "solid",
        borderWidth: "0 0 1px 0",
        borderColor: "#00000010",
        zIndex: 100,
        backdropFilter: "saturate(180%) blur(13px)",
        color: color,
        transition: "400ms ease",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
          minHeight: "60px",
          height: "60px",
        }}
      >
        <Box>
          <Link href="/">
            <a>
              <Typography variant="h5" fontSize={18} fontWeight={500}>
                kraikub.
              </Typography>
            </a>
          </Link>
        </Box>
        {/* <Typography
          fontFamily={`'Manrope', sans-serif`}
          fontSize={20}
          fontWeight={500}
        >
          kraikub
        </Typography> */}
        <Stack direction="row" spacing={4} alignItems="center">
          <NavbarLink href="/products" text="Products" />
          <Button
            size="small"
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: "1000px",
            }}
          >
            Use now
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
