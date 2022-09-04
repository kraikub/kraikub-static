import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import logo from "../../public/logo.png";

interface StaticNavbarProps {
  sticky?: boolean;
  transparent?: boolean;
}

const StaticNavbar: FC<StaticNavbarProps> = ({ sticky, transparent }) => {
  const router = useRouter()
  return (
    <Flex
      position={sticky ? "sticky" : "absolute"}
      top={0}
      left={0}
      right={0}
      py="12px"
      bg={transparent ? "transparent" : "white"}
      zIndex={35}
      boxShadow={sticky ? "0 10px 10px #00000010" : "none"}
      px="20px"
      minH="70px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex alignItems="center" gap={3} onClick={() => router.push('/')} cursor="pointer">
        <Image src={logo.src} h="26px" alt="logo" />
        <Heading size="md" fontWeight={700} color="black">
          kraikub{" "}
        </Heading>
      </Flex>
    </Flex>
  );
};
export default StaticNavbar;
