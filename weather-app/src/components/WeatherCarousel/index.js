import { Container } from "@mui/material";
import Carousel from "react-elastic-carousel";
import React, {useState, useEffect} from "react";
import randomData from "../../dummyData";
import WeatherDisplayCard from "../WeatherDisplayCard";
import fetchData, {fetchGeoCodes, fetchWeatherData, createArrayOfData} from '../../data-models/index'

const breakPoints = [
  { width: 0, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
  { width: 900, itemsToShow: 3 },
];



export default function WeatherCarousel() {

  const [weatherData, setweatherData] = useState([]);

  useEffect(() => {

    setweatherData(createArrayOfData());

  }, [])

  console.log(weatherData);

  return (
    <Container>
      <Carousel breakPoints={breakPoints}>
        {weatherData.map((el, index) => (
          <WeatherDisplayCard
            key={index}
            weather={el.weather}
            date={el.date}
            temp={el.temperature}
            pressure={el.pressure}
            humidity={el.humidity}
            speed={el.windSpeed}
            clouds={el.clouds}
          ></WeatherDisplayCard>
        ))}
      </Carousel>
    </Container>
  );
}
