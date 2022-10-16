import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#24A870",
      contrastText: "white",
    },
    secondary: {
      main: "#ededed",
      dark: "#c2c2c2",
      contrastText: "#454545",
    },
  },
  typography: {
    fontFamily: `'Sarabun', sans-serif`,
    fontSize: 16,
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
