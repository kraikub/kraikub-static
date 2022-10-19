import { Box, Collapse, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { KraikubLogo } from "../components/svg/KraikubLogo";

export const StaticNavbar = () => {
  const [show, setShow] = useState<boolean>(true);

  return (
    <Box
      sx={{
        backgroundColor: "white",
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        minHeight: "70px",
        height: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: "30px",
        border: "solid #00000020",
        borderWidth: "0 0 1px 0",
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <KraikubLogo height="30px" />
        {/* <Typography
          fontFamily={`'Manrope', sans-serif`}
          fontSize={20}
          fontWeight={500}
        >
          kraikub
        </Typography> */}
      </Box>
    </Box>
  );
};
