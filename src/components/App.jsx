import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import AppBar from "./AppBar";
import "./styles.css";
import { Container } from "@mui/material";
import { CustomButtonCssInJS, CustomButtonEmotion } from "./Buttons";
import { Button as ButtonBase } from "@mui/base/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ButtonStyledComponent from "./StyledComponentButton";

function App() {
const theme = createTheme({
  palette: {
    primary: {
      main: "#084C61",
      contrastText: "#fff",
    },
    secondary: {
      main: "#DB504A",
      contrastText: "#000",
    },
  },
  spacing: 8,
  typography: {
    h4: {
      fontSize: "1.2rem",
      fontWeight: 500,
    },
  },
});

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar />
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <Stack spacing={"40px"} direction="row" padding={"15px"}>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <ButtonStyledComponent>ButtonStyledComponent</ButtonStyledComponent>
          </Stack>
          <Rating precision={0.5} max={5} sx={{ p: "10px" }} />
          <CustomButtonCssInJS
            type="button"
            onClick={() => {
              console.log("Click");
            }}
          >
            Custom Button
          </CustomButtonCssInJS>
          <CustomButtonEmotion />
          <ButtonBase>Button</ButtonBase>
          <ButtonBase disabled>Disabled</ButtonBase>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
