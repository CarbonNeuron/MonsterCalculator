"use client";

import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { SxProps, Theme, useColorScheme } from "@mui/material/styles";

interface ThemeSwitcherProps {
  sx?: SxProps<Theme>;
}

export default function ThemeSwitcher({ sx = [] }: ThemeSwitcherProps) {
  const { mode, setMode } = useColorScheme();

  return (
    <IconButton
      sx={[
        {
          color: "inherit",
        },
        // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      onClick={() => {
        setMode(mode === "dark" ? "light" : "dark");
      }}
    >
      <LightMode
        sx={(theme) => ({
          ...theme.applyStyles("light", {
            display: "none",
          }),
        })}
      />
      <DarkMode
        sx={(theme) => ({
          ...theme.applyStyles("dark", {
            display: "none",
          }),
        })}
      />
    </IconButton>
  );
}
