//creating the fetch functions that will bring data to the cards 

const API_KEY = '2cd4fbd3d72eee725251ebc4af4a9df8';


export async function fetchGeoCodes(){

  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=2&appid=${API_KEY}`)

  const data = await response.json();

  console.log(data[0]);

  return data[0];

}

export async function fetchWeatherData(){

  const coordinates = await fetchGeoCodes();

  const latitude = coordinates.lat;
  const longitude = coordinates.lon;

  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${API_KEY}`)
  const data = await response.json();

  console.log(data);

  return data;
}

async function createArrayOfData(){

  const allTheData = await fetchWeatherData();

  const sanitisedArray = [];

  const currentObject = {
    date: allTheData.current.dt,
    feelsLike: allTheData.current.feels_like,
    temperature: allTheData.current.temp,
    windSpeed: allTheData.current.wind_speed,
    weatherDescription: allTheData.current.weather[0].description,
    weather: allTheData.current.weather[0].main,
    clouds: allTheData.current.clouds,
    humidity: allTheData.current.humidity,
    pressure: allTheData.current.pressure
  }

  sanitisedArray.push(currentObject);

  for (let i = 0; i < 7; i++){

    currentObject = {
      date: allTheData.daily[i].dt,
      feelsLike: allTheData.daily[i].feels_like.day,
      temperature: allTheData.daily[i].temp.day,
      windSpeed: allTheData.daily[i].wind_speed,
      weatherDescription: allTheData.daily[i].weather[0].description,
      weather: allTheData.daily[i].weather[0].main,
      clouds: allTheData.daily[i].clouds,
      humidity: allTheData.daily[i].humidity,
      pressure: allTheData.daily[i].pressure
    }
    
    sanitisedArray.push(currentObject)

  }

  return sanitisedArray;

}
  