import { Stack } from "@mui/system";
import { SnackbarProvider } from "notistack";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { DefaultTheme } from "../themes";
import { HomePage } from "../pages/Home/Home.page";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "../locales/Locales.config";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <SnackbarProvider maxSnack={3}>
        <CssBaseline />
        <Stack minHeight="100vh">
          <HomePage />
        </Stack>
      </SnackbarProvider>
    </ThemeProvider>
  );
};
