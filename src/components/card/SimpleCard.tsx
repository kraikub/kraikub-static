import { Box, SxProps, useTheme } from "@mui/material";
import { FC } from "react";

interface SimpleCardProps {
  children?: any;
  sx?: SxProps;
}

export const SimepleCard: FC<SimpleCardProps> = ({ children, sx }) => {
  const theme = useTheme()
  return (
    <Box sx={{
      borderRadius: '10px',
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: theme.palette.divider,
      p: "20px",
      ...sx,
    }}>{children}</Box>
  )
} 