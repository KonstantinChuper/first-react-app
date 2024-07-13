import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import "./styles.css";

export default function App() {
const [open, setOpen] = useState(false);

const handleClick = () => {
  open === false ? setOpen(true) : setOpen(false);
};

return (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My App</Typography>
      </Toolbar>
    </AppBar>
    <Container>
      <Typography variant="h4" style={{ marginTop: "20px" }}>
        Welcome to My App!
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClick} style={{ marginTop: "20px" }}>
        Open Dialog
      </Button>
      <Dialog open={open}>
        <DialogTitle>{"Use Material UI?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            It's a simple App which using Material UI. You can set it according to your preferences.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClick} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  </div>
);
}
