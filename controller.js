import * as model from './model.js'
import City from './views/renderCity.js'
import Weather from './views/renderWeather.js'
const { VITE_API_URL, VITE_API_KEY, VITE_API_UNIT } = import.meta.env

export const showCity = async function() { 
  try {
    await model.searchCity();
    
    const data = model.state;

    City.render(data);
  } 
  catch(err) {
    console.log(err);
  }
}

export const WeatherData = async function(evt) {
  try {     
    const {lat, lon} = evt.target.dataset;
    
    const weatherRes = await fetch(`${VITE_API_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=${VITE_API_UNIT}&appid=${VITE_API_KEY}`);
    
    const weatherDataJson = await weatherRes.json();
    
    const result1 = [].concat(weatherDataJson);
    
    Weather.render(result1);
    
  } 
  catch (err) {
    console.log(err);
  }
}
