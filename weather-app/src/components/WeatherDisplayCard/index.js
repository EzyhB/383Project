import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";

export default function WeatherDisplayCard({ day, date }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={day} subheader={date}></CardHeader>
      <CardContent>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
      </CardContent>
    </Card>
  );
}
