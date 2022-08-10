import { createTheme, responsiveFontSizes } from "@mui/material";

export const DefaultTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#009999",
        light: "#00cccc",
        dark: "#006666",
      },
    },
    typography: {
      fontSize: 16,
    },
    components: {
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            marginLeft: 0,
            marginRight: 0,
          },
        },
      },
    },
  })
);
