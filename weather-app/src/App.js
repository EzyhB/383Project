import "./App.css";
import { Container, Grid, ThemeProvider } from "@mui/material";
import WeatherCarousel from "./components/WeatherCarousel";
import darkTheme from "./styles/theme/themes";
import BigWeatherDisplay from "./components/BigWeatherDisplay";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container
        maxWidth={false}
        sx={{ height: "100vh", background: "#28293E" }}
      >
        <Grid container>
          <Grid item md={8} xs={12}>
            <WeatherCarousel></WeatherCarousel>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <BigWeatherDisplay></BigWeatherDisplay>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
