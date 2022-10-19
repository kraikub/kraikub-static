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
    fontFamily: `'Inter', sans-serif`,
    fontSize: 16,
    h1: {
      fontWeight: 500,
      letterSpacing: -1,
    },
    h2: {
      letterSpacing: -2,
    },
    h3: {
      letterSpacing: -2,
    },
    h4: {
      letterSpacing: -1,
    },
    h5: {
      letterSpacing: 0,
    },
    h6: {
      letterSpacing: 0,
    },
    body1: {
      fontWeight: 300,
      color: "#000000b0",
    },
    body2: {
      fontWeight: 300,
      color: "#000000b0",
      fontSize: 14,
    },
    button: {
      fontSize: 16,
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});
