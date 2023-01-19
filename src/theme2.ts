import { createTheme } from "@mui/material";
import { colors } from "@mui/material";

//const theme = createTheme(deepmerge(options1, options2));
export const theme = createTheme({
  palette: {
    secondary: {
      main: colors.orange[500]
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700]
    }
  },
  status: "#e53e3e",
  themeName: "My Custom String"
});

// declare module "@mui/material" {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//     themeName: string;
//     custom: {
//       color: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//     themeName: string;
//     custom: {
//       color: string;
//     };
//   }
// }

// const customPalette = {
//   primary: {
//     main: "#ff4400"
//   },
//   secondary: {
//     main: "#00ff00"
//   }
// };

// const customTokens = {
//   status: {
//     danger: colors.deepOrangeorange[500]
//   },
//   themeName: "My Sandbox Theme",
//   custom: {
//     color: "#000000"
//   }
// };
