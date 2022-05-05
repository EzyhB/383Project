import { Container } from "@mui/material";
import Carousel from "react-elastic-carousel";
import React from "react";
import randomData from "../../dummyData";
import WeatherDisplayCard from "../WeatherDisplayCard";

const breakPoints = [
  { width: 0, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
  { width: 900, itemsToShow: 3 },
];

export default function WeatherCarousel() {
  return (
    <Container>
      <Carousel breakPoints={breakPoints}>
        {randomData.map((el, index) => (
          <WeatherDisplayCard
            key={index}
            weather={el.weather[0].main}
            date={el.dt}
            temp={el.temp.day}
            humidity={el.humidity}
          ></WeatherDisplayCard>
        ))}
      </Carousel>
    </Container>
  );
}
