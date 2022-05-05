import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {

  const [cities, setCities] = useState([]);

  const filterCities = (e) => {
    const searchedLetters = e.target.value.toLowerCase();
    console.log(searchedLetters);
    const filteredCities = cities.filter((city) => {
      return (
        city.name.toLowerCase().includes(searchedLetters)
      );
    });
    setCities(filteredCities);
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onKeyUp={(e) => filterCities(e)}
    >

      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  );
}
