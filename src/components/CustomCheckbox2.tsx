import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

import { ThemeProvider, styled } from "@mui/material/styles";
import { theme } from "../theme2";
import { Box, Typography } from "@mui/material";

const CustomBox = styled(Box)(({ theme }) => ({
  height: 200,
  width: 200,
  backgroundColor: theme.palette.neutral.darker
}));

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: "primary.main",
  "&.Mui-checked": {
    color: "primary.light"
  }
}));

const ThemeName: React.FC = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          height: 100,
          bgcolor: "secondary.dark"
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ m: 1, backgroundColor: "secondary.main", color: "inherit" }}
        >
          {theme.themeName}
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default function CustomStyles() {
  return (
    <ThemeProvider theme={theme}>
      <CustomCheckbox defaultChecked />
      <ThemeName />
      <CustomBox />
    </ThemeProvider>
  );
}
