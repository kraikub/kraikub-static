import "../styles/css/globals.css";
import "animate.css/animate.min.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { lightThemeGreen } from "../styles/mui";
import { NavbarProvider } from "../src/contexts/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightThemeGreen}>
      <NavbarProvider>
        <Component {...pageProps} />
      </NavbarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
