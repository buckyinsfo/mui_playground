import React from 'react';
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import CustomStyles from './components/CustomCheckbox';


const App = () => {
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
      <Button variant="contained">My Big Button</Button>
      <CustomStyles />
    </Box>
  );
}

export default App;
