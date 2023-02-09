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
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { FC, useState } from "react";
import { useNavbarControl } from "../hooks/useNavbarControl";
import { IoIosArrowRoundForward } from "react-icons/io";
interface NavbarLinkProps {
  text: string;
  href: string;
  chipText?: string;
  chipColor?: string;
  chipBg?: string;
}

interface StaticNavbarProps {
  sticky?: boolean;
  disableBorder?: boolean;
}

const links = [
  {
    text: "Services",
    href: "/services",
  },
  {
    href: "https://app.kraikub.com/projects/manager",
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
              opacity: 0.7,
              fontSize: {
                xs: 18,
                sm: 14,
              },
              fontWeight: 400,
              transition: "200ms ease",
              "&:hover": {
                opacity: 1,
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

export const StaticNavbar: FC<StaticNavbarProps> = ({
  sticky,
  disableBorder,
}) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          position: sticky ? "fixed" : "relative",
          top: 0,
          left: 0,
          right: 0,
          px: 2,
          zIndex: theme.zIndex.appBar,
          borderStyle: disableBorder ? "none" : "solid",
          borderWidth: "0 0 1px 0",
          borderColor: theme.palette.divider,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1,
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
            }}
          >
            <Link href="/">
              <Typography
                fontSize={18}
                fontWeight={700}
                letterSpacing="-0.03em"
              >
                {/* <img src="/static/logo/transparent/kraikub-logo-256.png" height="34px"/> */}
                KRAIKUB
              </Typography>
            </Link>
          </Box>
          <Box>
            <Stack direction="row" spacing={2}>
              <a href="https://app.kraikub.com/a">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    gap: 1,
                  }}
                >
                  ไปที่ Kraikub ID
                </Button>
              </a>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};
