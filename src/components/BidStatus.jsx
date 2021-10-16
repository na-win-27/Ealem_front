import React from "react";
import Box from "@mui/material/Box";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";

const BidStatus = (props) => {
  console.log(props)
  const formattedBid = props.bid/ 10000000;
  const handleClick = () => {
   
    props.handleOpen();
  };
  console.log(props)
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
      </Box>
    </>
  );
};

export default (BidStatus);
