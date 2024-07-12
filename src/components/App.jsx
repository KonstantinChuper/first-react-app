import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import AppBar from "./AppBar";
import "./styles.css";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <AppBar />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column"
        }}
      >
        <Stack spacing={"40px"} direction="row" padding={"15px"}>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Rating precision={0.5} max={5} sx={{ p: "10px" }} />
      </Container>
    </>
  );
}

export default App;
