import logo from "./logo.svg";
import "./App.css";
import WeatherDisplayCard from "./components/WeatherDisplayCard";
import { Container } from "@mui/material";
import WeatherCarousel from "./components/WeatherCarousel";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Container>
      <SearchBar></SearchBar>
      <WeatherCarousel></WeatherCarousel>
    </Container>
  );
}

export default App;
