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

export const StaticNavbar: FC<StaticNavbarProps> = ({ sticky }) => {
  const { color, overlayColor } = useNavbarControl();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <Box
        sx={
          {
            // backgroundColor: "#2d2d2d",
          }
        }
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "68px",
            }}
          >
            <Box sx={{
              cursor: "pointer",
            }}>
              <Link href="/">
                <Typography variant="h6" fontWeight={700}>KRAIKUB</Typography>
              </Link>
            </Box>
            <Box>
              <a href="https://app.kraikub.com/a">
                <Button
                  color="secondary"
                  sx={{
                    color: theme.palette.text.primary,
                    gap: 1,
                  }}
                >
                  Developer Console
                  <IoIosArrowRoundForward size="30px" />
                </Button>
              </a>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
