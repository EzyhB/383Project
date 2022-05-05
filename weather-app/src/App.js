import "./App.css";
import { useState } from "react"
import { Container, Grid, ThemeProvider } from "@mui/material";
import WeatherCarousel from "./components/WeatherCarousel";
import darkTheme from "./styles/theme/themes";
import lightTheme from "./styles/theme/lighttheme";
import BigWeatherDisplay from "./components/BigWeatherDisplay";
<<<<<<< HEAD
import BasicTextFields from "./components/SearchBar";
=======
import { ToggleButtonGroup, ToggleButton } from "@mui/material"
import AppHeading from "./components/AppHeading";

>>>>>>> 6595d23209ec16df673331f3c5080a3ca84953e3

function App() {

  const [toggleDark, setToggleDark] = useState(false)

  return (
    
    <ThemeProvider theme={darkTheme}>
      <Container
        maxWidth={false}
        sx={{ height: "100vh", background: toggleDark ? "#28293E" : "#fff"}}
      >
<<<<<<< HEAD
        <BasicTextFields></BasicTextFields>
=======

<ToggleButtonGroup
  color="secondary"
  // value={alignment}
  // onChange={handleChange}
>
  <ToggleButton value="light">Light</ToggleButton>
  <ToggleButton value="dark">Dark</ToggleButton>
</ToggleButtonGroup>

        <AppHeading />

>>>>>>> 6595d23209ec16df673331f3c5080a3ca84953e3
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
