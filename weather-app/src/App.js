import "./App.css";
import { Container, ThemeProvider } from "@mui/material";
import WeatherCarousel from "./components/WeatherCarousel";
import darkTheme from "./styles/theme/themes";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container
        maxWidth={false}
        sx={{ height: "100vh", background: "#28293E" }}
      >
        <WeatherCarousel></WeatherCarousel>
      </Container>
    </ThemeProvider>
  );
}

export default App;
