import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
const PlayerBought = () => {
  return (
    
      <Grid xs={12} md={4} >
       
        <Card sx={{ display: "flex",m:1,justifyContent:"space-around"  }}>
          <Box
            sx={{ display: "flex", flexDirection: "row", align: "center" ,justifyContent: "space-between" ,alignItems: "center"}}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h6"
                style={{ fontWeight: 600 }}
              >
                Virat Kohli
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                India
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 50,height: 50 }}
            image="/virat.jpg"
            alt="Virat Kohli"
          />
        </Card>
      </Grid>
    
  );
};

export default PlayerBought;
