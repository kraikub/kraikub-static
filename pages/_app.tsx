import "../styles/css/globals.css";
import "../public/fonts/styles.css";
import "animate.css/animate.min.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightThemeGreen } from "../styles/mui";
import { NavbarProvider } from "../src/contexts/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightThemeGreen}>
      <CssBaseline />
      <NavbarProvider>
        <Component {...pageProps} />
      </NavbarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
