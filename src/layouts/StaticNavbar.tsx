import { Box, Collapse, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

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
          paddingX: "20px",
          boxShadow: "0 2px 4px 2px #00000020",
          zIndex: 100,
        }}
      >
        <Typography
          fontFamily={`'Manrope', sans-serif`}
          fontSize={20}
          fontWeight={500}
        >
          kraikub
        </Typography>
      </Box>
  );
};
