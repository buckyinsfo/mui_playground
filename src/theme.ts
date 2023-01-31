import { createTheme } from "@mui/material";
import { colors } from "@mui/material";
// import './theme-mod'

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
  status: {
    danger: "#e53e3e",
  },
  tag: {
    label: "My Theme Label String"
  }
});
