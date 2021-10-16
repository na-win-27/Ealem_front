import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const PlayerCard = () => {

  return (
    <>
      <Box display="flex" height="100%" flexDirection="column">
        <Typography
          variant="h5"
          style={{ fontWeight: 900 }}
          textStyle="bold"
          align="center"
          gutterBottom
        >
          PlayerCard
        </Typography>
        <Card sx={{ display: "flex" }}>
          <Box
            sx={{ display: "flex", flexDirection: "column", align: "center" }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Box sx={{}}>
                <Typography
                  component="div"
                  variant="h4"
                  style={{ fontWeight: 600 }}
                >
                  Virat Kohli
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                India
              </Typography>
            </CardContent>
            <Box sx={{ hidden:true, display: "flex", alignItems: "center",justifyContent: "center", pl: 1, pb: 1 }}>
              <Typography>Right hand Bat</Typography>
              <Typography>Right hand Bat</Typography>
              <Typography>Right hand Bat</Typography>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 150}}
            image="/virat.jpg"
            alt="Virat Kohli"
          />
        </Card>
      </Box>
    </>
  );
};

export default PlayerCard;
