import { CssBaseline, ThemeProvider, Typography } from "@mui/material";

import { DefaultTheme } from "../themes";
import { HomePage } from "../pages/Home/Home.page";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Stack } from "@mui/system";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      <Stack minHeight="100vh">
        <HomePage />
      </Stack>
    </ThemeProvider>
  );
};
