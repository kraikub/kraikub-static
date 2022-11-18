import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3AB96D",
      contrastText: "white",
    },
    secondary: {
      main: "#ededed",
      dark: "#c2c2c2",
      contrastText: "#454545",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: `'Inter','Kanit', sans-serif`,
    fontSize: 16,
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 300,
      color: "#000000b0",
    },
    body2: {
      fontWeight: 300,
      color: "#00000080",
      fontSize: 14,
    },
    button: {
      fontSize: 16,
      fontWeight: 400,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
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
