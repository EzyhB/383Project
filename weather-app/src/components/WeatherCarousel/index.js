import { Container } from "@mui/material";
import Carousel from "react-elastic-carousel";
import React, {useState, useEffect} from "react";
import randomData from "../../dummyData";
import WeatherDisplayCard from "../WeatherDisplayCard";
import fetchData, {fetchGeoCodes, fetchWeatherData} from '../../data-models/index'

const breakPoints = [
  { width: 0, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
  { width: 900, itemsToShow: 3 },
];



export default function WeatherCarousel() {

  const [weatherData, setweatherData] = useState({});

  useEffect(() => {

    setweatherData(fetchWeatherData());

  }, [])

  console.log(weatherData);

  return (
    <Container>
      <Carousel breakPoints={breakPoints}>
        {weatherData.daily.map((el, index) => (
          <WeatherDisplayCard
            key={index}
            weather={el.weather[0].main}
            date={el.dt}
            temp={el.temp.day}
            pressure={el.pressure}
            humidity={el.humidity}
            speed={el.speed}
            clouds={el.clouds}
          ></WeatherDisplayCard>
        ))}
      </Carousel>
    </Container>
  );
}
