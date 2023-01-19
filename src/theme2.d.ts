// Search here for MUI interfaces used in createTheme function
// https://github.com/mui/material-ui/blob/master/packages/mui-material/src/styles/createTheme.d.ts
//
// https://youtu.be/ZyQlpX7lCRE

import {
  PaletteColor,
  PaletteColorOptions,
  ThemeOptions
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    // status: string,
    themeName: string;
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
    themeName: string;
  }

  interface Palette {
    neutral?: PaletteColor;
  }

  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface PaletteOptions {
    darker?: string;
  }
}
