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
            day={el.weather[0].main}
            date="testing"
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
