import { Container, Typography, useTheme } from "@mui/material";
import React from "react";

export default function AppHeading() {
  const theme = useTheme();
  return (
    <Container sx={{ marginBottom: "6rem" }}>
      <Typography
        variant="h1"
        align="center"
        color={theme.palette.text.primary}
      >
        Best Weather App
      </Typography>
    </Container>
  );
}
