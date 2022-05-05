import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";

export default function WeatherDisplayCard({
  day,
  date,
  temp,
  pressure,
  humidity,
  speed,
  clouds,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={day} subheader={date}></CardHeader>
      <CardContent>
        <Typography>Tempreature: {temp}</Typography>
        <Typography>Pressure: {pressure}</Typography>
        <Typography>Humidity: {humidity}</Typography>
        <Typography>Speed: {speed}</Typography>
        <Typography>Clouds: {clouds}</Typography>
      </CardContent>
    </Card>
  );
}
