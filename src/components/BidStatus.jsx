import React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";

const BidStatus = () => {
  const [bid, setBid] = React.useState(1000000);
  const formattedBid = bid / 10000000;
  const handleClick = () => {
    setBid(bid + 2000000);
  };
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ justifyContent: "space-evenly" }}
        height="100%"
      >
        <Typography align="center" style={{ fontWeight: 600 }} variant="h5">BidStatus</Typography>
        <Box
          display="flex"
          flexDirection="row"
          sx={{ justifyContent: "space-evenly" }}
        >
          <Typography variant="h3"style={{ fontWeight: 900 }} textStyle="bold" align="center" gutterBottom>
            {formattedBid + "cr"}
          </Typography>
          <Fab color="secondary" onClick={handleClick} variant="extended">
            <AddIcon align="center" />
            Add Bid
          </Fab>
        </Box>
        <Fab color="primary" variant="extended">Place Bid</Fab>
      </Box>
    </>
  );
};

export default BidStatus;
