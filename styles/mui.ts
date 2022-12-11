import { createTheme } from "@mui/material";

export const lightThemeGreen = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#10E773",
    },
    secondary: {
      main: "#00000010",
      dark: "#00000020",
      contrastText: "#262626"
    },
    text: {
      primary: "#262626",
      secondary: "#4a4a4a",
      disabled: "#6a6a6a"
    },
    background: {
      default: "#fbfbfb",
    }
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: 18,
      fontWeight: 500,
    },
    body2: {
      fontWeight: 500,
    },
    button: {
      fontSize: 16,
      fontWeight: 500,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        }
      }
    }
  },
});
