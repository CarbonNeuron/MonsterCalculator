import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import type { Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

/**
 * Installs MUI with SSR best practices, and CSSBasline
 */
export default async function MUISetup({
  children,
  theme,
}: {
  children: ReactNode;
  theme: Theme;
}) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <InitColorSchemeScript attribute="class" />
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
