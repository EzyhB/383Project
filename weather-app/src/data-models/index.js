//creating the fetch functions that will bring data to the cards 

const API_KEY = '2cd4fbd3d72eee725251ebc4af4a9df8';

async function fetchGeoCodes(){

  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=2&appid=${API_KEY}`)

  const data = await response.json();

  console.log(data[0]);

  const latitude = data[0].lat;
  const longitude = data[0].long;

  //fetchWeatherData(latitude, longitude)

  return data[0];

}

async function fetchWeatherData(){

  const coordinates = await fetchGeoCodes();

  const latitude = coordinates.lat;
  const longitude = coordinates.lon;

  const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
  const data = await response.json();

  console.log(data);
}

fetchWeatherData();





const API_KEY2 = "d22f3c3822a9968ad52d483c9c733184"

async function fetchWeatherData (){
  const response = await fetch("https://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid={API key}")
  const data = await response.json()
  
}