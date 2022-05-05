import logo from "./logo.svg";
import "./App.css";
import WeatherDisplayCard from "./components/WeatherDisplayCard";
import { Container } from "@mui/material";
import WeatherCarousel from "./components/WeatherCarousel";

function App() {
  return (
    <Container>
      <WeatherCarousel></WeatherCarousel>
    </Container>
  );
}

export default App;