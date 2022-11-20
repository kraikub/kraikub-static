import { ThemeProvider } from "@mui/material";
import { FC } from "react";
import { lightThemeBlue } from "../../styles/mui";

interface BlueThemeProviderProps {
  children?: any;
}

export const BlueThemeProvider: FC<BlueThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={lightThemeBlue}>{children}</ThemeProvider>;
};
