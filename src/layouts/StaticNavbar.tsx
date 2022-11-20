import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { FC, useState } from "react";
import { useNavbarControl } from "../hooks/useNavbarControl";
import { IoCloseOutline } from "react-icons/io5";
import { TbMenu } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import Head from "next/head";
import { BlueThemeProvider } from "./BlueThemeProvider";
interface NavbarLinkProps {
  text: string;
  href: string;
  chipText?: string;
  chipColor?: string;
  chipBg?: string;
}

interface StaticNavbarProps {
  sticky?: boolean;
}

const links = [
  {
    text: "Services",
    href: "/services",
  },
  {
    href: "https://app.kraikub.com",
    text: "Developers Console",
    chipText: "NEW",
    chipColor: "#000",
    chipBg: "#ffcfba",
  },
];

const NavbarLink: FC<NavbarLinkProps> = ({
  text,
  href,
  chipColor,
  chipText,
  chipBg,
}) => {
  return (
    <Link href={href} color="inherit">
      <a>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography
            sx={{
              color: "inherit",
              opacity: 0.6,
              fontSize: {
                xs: 18,
                sm: 12,
              },
              fontWeight: 500,
              transition: "200ms ease",
              "&:hover": {
                opacity: 0.8,
              },
            }}
          >
            {text}
          </Typography>
          {!chipText ? null : (
            <Chip
              size="small"
              label={chipText}
              sx={{
                fontSize: 8,
                color: chipColor,
                backgroundColor: chipBg,
              }}
            />
          )}
        </Stack>
      </a>
    </Link>
  );
};

export const StaticNavbar: FC<StaticNavbarProps> = ({ sticky }) => {
  const { color, overlayColor } = useNavbarControl();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Head>
        <meta name="theme-color" content={overlayColor} />
      </Head>
      <Box
        sx={{
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
          backgroundColor: `${overlayColor}b8`,
          backdropFilter: "saturate(180%) blur(20px)",
          color: color,
          transition: "100ms ease",
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
                <Stack direction="row" alignItems="center" spacing="5px">
                  <img
                    src="/icons/kraikub-icon.svg"
                    style={{
                      display: "inline",
                      height: 22,
                    }}
                    alt="kraikub-icon"
                  />
                  <Typography variant="h5" fontSize={16} fontWeight={600}>
                    KRAIKUB
                  </Typography>
                </Stack>
              </a>
            </Link>
          </Box>
          <Stack direction="row" spacing={4} alignItems="center">
            <Stack
              direction="row"
              spacing={4}
              alignItems="center"
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
              }}
            >
              {links.map((link, index) => {
                return (
                  <NavbarLink
                    key={`nav-link-${index}-${link.text}`}
                    {...link}
                  />
                );
              })}
              <BlueThemeProvider>
                <Button
                  variant="contained"
                  sx={{
                    fontSize: 12,
                    textTransform: "none",
                  }}
                >
                  Soon
                </Button>
              </BlueThemeProvider>
            </Stack>
            <IconButton
              sx={{
                color: color,
                fontSize: 20,
                display: {
                  xs: "inline-flex",
                  sm: "none",
                },
              }}
              onClick={() => setIsModalOpen(true)}
            >
              <TbMenu />
            </IconButton>
          </Stack>
        </Container>
        <Drawer
          anchor="right"
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          PaperProps={{
            sx: {
              width: "100vw",
              position: "relative",
              color: color,
              backgroundColor: overlayColor,
            },
          }}
        >
          <Box
            sx={{
              width: "100vw",
              height: "100vh",
              position: "relative",
              py: "100px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 15,
                right: 15,
              }}
            >
              <IconButton
                size="small"
                onClick={() => setIsModalOpen(false)}
                sx={{
                  color: color,
                }}
              >
                <IoCloseOutline />
              </IconButton>
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                left: 0,
                w: "100%",
                padding: "18px",
              }}
            >
              <Container maxWidth="xs">
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    height: "60px",
                    textTransform: "none",
                    fontWeight: 500,
                    gap: 1,
                    borderRadius: "1000px",
                  }}
                >
                  Your Kraikub ID
                  <BsArrowRight size="22px" />
                </Button>
              </Container>
            </Box>
            <Container>
              <Box mb={6}>
                <Link href="/">
                  <a>
                    <Box>
                      <Typography variant="h5" fontSize={18} fontWeight={500}>
                        kraikub.
                      </Typography>
                      <Typography
                        variant="body2"
                        fontSize={12}
                        sx={{
                          color: color,
                          opacity: 0.6,
                        }}
                      >
                        Student Identity Provider for Kasetsart University.
                      </Typography>
                    </Box>
                  </a>
                </Link>
                <Divider
                  sx={{
                    my: 3,
                    background: color,
                    opacity: 0.2,
                  }}
                />
              </Box>
              <Stack spacing={4}>
                {links.map((link, index) => {
                  return (
                    <NavbarLink
                      key={`nav-link-${index}-${link.text}`}
                      {...link}
                    />
                  );
                })}
              </Stack>
            </Container>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};
