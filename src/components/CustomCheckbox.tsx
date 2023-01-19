import * as React from "react";

import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import color from "@mui/material/colors/deepOrange";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.failure,
  "&.Mui-checked": {
    color: theme.status.failure
  }
}));

const theme = createTheme({
  status: {
    failure: color[500]
  }
});

export default function CustomStyles() {
  return (
    <ThemeProvider theme={theme}>
      <CustomCheckbox defaultChecked />
    </ThemeProvider>
  );
}
