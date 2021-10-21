import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  INCREASE_BID,
  DECREASE_CASH,
  PLAYER_BOUGHT,
  RESET_BID,
} from "../static/actionTypes";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { Container, Grid, Paper } from "@mui/material";
import BidStatus from "../components/BidStatus";
import CashInHand from "../components/CashInHand";
import PlayerCard from "../components/PlayerCard";
import PlayerBought from "../components/PlayerBought";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:8000";

let socket;

const mapStateToProps = (state) => {
  return {
    cash: state.cash,
    bid: state.bid,
    PlayerBought: state.PlayerBought,
  };
};

const mapDispatchToProps = (dispatch) => ({
  incBid: () => dispatch({ type: INCREASE_BID }),
  resBid:()=>dispatch({ type:RESET_BID }),
  decCash:() => dispatch({ type: PLAYER_BOUGHT})
});

var connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

const Dashboard = (props) => {
  const mdTheme = createTheme();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    socket = io(ENDPOINT, connectionOptions);
    socket.emit("join", { name: "navin", room: "272001" }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT]);

  React.useEffect(() => {
    socket.on("message", (message) => {
      console.log(message);
    });
    socket.on("won",async (message) => {
      console.log(message);
      if(message.winner=="ME"){
        props.decCash();
      }
      props.resBid();
      const response=await fetch('https://api.github.com/users/na-win-27');
      console.log(response);
      setHigh(false);
    });
    socket.on("bidIncrement", () => {
      props.incBid();
      setHigh(false);
    });
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [high, setHigh] = React.useState(false);
  const placeBid = () => {
    socket.emit("placeBid", props.bid, () => {
      console.log("cb");
      props.incBid();
      setHigh(true);
    });
    setOpen(false);
  };
  const cancelBid = () => {
    console.log("redux acrion");
    setOpen(false);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box display="flex" sx={{ mt: 25 }} justifyContent="center">
          <Paper>
            <Typography variant="h4">
              {high?"You are already The highest Bidder":"Are you sure you want to Place the Bid"}
            </Typography>
            <Box sx={{ mt: 5 }} display="flex" justifyContent="center">
              <Button disabled={high} onClick={placeBid} sx={{ mr: 5 }}>
                <h2>Yes</h2>
              </Button>
              <Button onClick={cancelBid} sx={{ mr: 5 }}>
                <h2>No</h2>
              </Button>
            </Box>
          </Paper>
        </Box>
      </Modal>
      <Box
        sx={{
          mt: 4,
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
            <Grid item xs={12} md={6} lg={4}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <BidStatus handleOpen={handleOpen} bid={props.bid} />
                {high ? <p>High</p> : <p>Bid More</p>}
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={5}>
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
                <CashInHand cash={props.cash} />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <Container>
                  <Typography
                    variant="h5"
                    style={{ fontWeight: 600 }}
                    textStyle="bold"
                    align="center"
                    gutterBottom
                  >
                    Player's Bought
                  </Typography>
                </Container>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                  <Grid container>
                    <PlayerBought />
                    <PlayerBought />
                    <PlayerBought />
                    <PlayerBought />
                    <PlayerBought />
                    <PlayerBought />
                    <PlayerBought />
                    <PlayerBought />
                    <PlayerBought />
                    <PlayerBought />
                    <PlayerBought />
                    <PlayerBought />
                  </Grid>
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
