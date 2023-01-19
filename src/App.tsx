import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import CustomStyles from "./components/CustomCheckbox";
import CustomStyles2 from "./components/CustomCheckbox2";

const App: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <Typography textAlign="center" sx={{ m: 1 }}>
        My MUI V5 Playground
      </Typography>
      <Button variant="contained">My Button</Button>
      <CustomStyles />
      <CustomStyles2 />
    </Box>
  );
};

export default App;
