import { createTheme } from "@mui/material";

export const lightThemeGreen = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#35bda4",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#00000010",
      contrastText: "#000000A0",
    },
    info: {
      main: "#1E34FE",
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
    borderRadius: 8
  },
  typography: {
    fontFamily: `'Inter', sans-serif`,
    h1: {
      fontWeight: 600,
      fontFamily: `'Inter Tight', sans-serif`,
    },
    h2: {
      fontWeight: 600,
      fontFamily: `'Inter Tight', sans-serif`,
    },
    h3: {
      fontWeight: 600,
      fontFamily: `'Inter Tight', sans-serif`,
    },
    h4: {
      fontWeight: 600,
      fontFamily: `'Inter Tight', sans-serif`,
    },
    h5: {
      fontWeight: 600,
      fontFamily: `'Inter', sans-serif`,
    },
    h6: {
      fontWeight: 600,
      fontFamily: `'Inter', sans-serif`,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
      opacity: 0.6,
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
      defaultProps: {
        color: "secondary",
      },
      styleOverrides: {
      }
    }
  },
});
