import { Container, Typography } from "@mui/material";
import React from "react";
import randomData from "../../dummyData";

export default function BigWeatherDisplay() {
  return (
    <Container
      sx={{
        maxWidth: "80%",
        background: "#fff",
        borderRadius: "2rem",
        height: "10rem",
      }}
    >
      <Typography>
        {randomData.map((el, index) => (
          <BigWeatherDisplay
            key={index}
            weather={el.weather[0].main}
            date={el.dt}
            temp={el.temp.day}
            pressure={el.pressure}
            humidity={el.humidity}
            speed={el.speed}
            clouds={el.clouds}
          ></BigWeatherDisplay>
        ))}
      </Typography>
    </Container>
  );
}
