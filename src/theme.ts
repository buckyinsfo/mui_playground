import { createTheme } from "@mui/material/styles";
import color from "@mui/material/colors/red";

export type Mode = "Light" | "Dark" | "System" | "Undefined";
export const LightMode = "Light";
export const DarkMode = "Dark";
export const SystemMode = "System";
export const UndefinedMode = "Undefined";

type CustomTheme = {
  palette: {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
  };
  custom: {
    color: string;
  };
  status: {
    failure: string;
  };
};

const theme: CustomTheme = createTheme({
  palette: {
    primary: {
      main: "#ff4400"
    },
    secondary: {
      main: "#00ff00"
    }
  },
  status: {
    failure: color[500]
  },
  custom: {
    color: "#0000ff"
  }
});

export default theme;
