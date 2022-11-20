import { createTheme } from "@mui/material";

export const lightThemeGreen = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#10E773",
      contrastText: "#000000",
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
    fontSize: 14,
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
      fontWeight: 400,
    },
    body2: {
      fontWeight: 300,
      fontSize: 12,
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


export const lightThemeBlue = createTheme({
  ...lightThemeGreen,
  palette: {
    ...lightThemeGreen,
    primary: {
      main: "#2D19A6",
      contrastText: "#ffffff"
    }
  }
})