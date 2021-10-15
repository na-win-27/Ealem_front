import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
const CashInHand = () => {
  const [cash, setCash] = React.useState(600000000);
  const formattedCash = cash / 10000000;
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ justifyContent: "space-evenly" }}
      height="100%"
    >
      <Container>
        <Typography variant="h5" style={{ fontWeight: 600 }} textStyle="bold" align="center" gutterBottom>
          Cash In Hand
        </Typography>
      </Container>
      <Container>
        <Typography variant="h3" style={{ fontWeight: 900 }}textStyle="bold" align="center" gutterBottom>
          {formattedCash + "cr"}
        </Typography>
      </Container>
    </Box>
  );
};

export default CashInHand;
