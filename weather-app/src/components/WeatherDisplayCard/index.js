import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";

export default function WeatherDisplayCard({
  weather,
  date,
  temp,
  pressure,
  humidity,
  speed,
  clouds,
}) {
  return (
    <Card sx={{ maxWidth: 345, color: "#28293E" }}>
      <CardHeader title={weather} subheader={date}></CardHeader>
      <CardContent>
        <Typography>Temperature: {temp}</Typography>
        <Typography>Pressure: {pressure}</Typography>
        <Typography>Humidity: {humidity}</Typography>
        <Typography>Speed: {speed}</Typography>
        <Typography>Clouds: {clouds}</Typography>
      </CardContent>
    </Card>
  );
}
