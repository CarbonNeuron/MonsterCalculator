"use client";
import type {} from "@mui/lab/themeAugmentation";
import { createTheme } from "@mui/material/styles";
import { LinkProps } from "@mui/material";
import { LinkBehavior } from "./LinkBehavior";



const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
        color: "inherit",
        underline: "none",
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  colorSchemes: {
    light: true,
    dark: true,
  },
});

export default theme;
