import React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { Container, Grid, Paper } from "@mui/material";
import BidStatus from "../components/BidStatus";
import CashInHand from "../components/CashInHand";
import PlayerCard from "../components/PlayerCard";



const Dashboard = () => {
  const mdTheme = createTheme();
  return (
    <ThemeProvider theme={mdTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CssBaseline />
        <AppBar position="absolute">
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Ealem
          </Typography>
        </AppBar>
      </Box>
      <Box>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={4}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <BidStatus />
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4} lg={5}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <PlayerCard />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  height: 240,
                }}
              >
                <CashInHand/>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                players bought
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
