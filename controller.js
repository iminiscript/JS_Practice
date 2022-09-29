import * as model from './model.js'
import { API_URL, KEY, DATA_UNIT } from './config.js'
import City from './views/renderCity.js'
import Weather from './views/renderWeather.js'

export const showCity = async function() { 
  try {
    await model.searchCity();
    
    const data = model.state;
    
    const {lat, lon} = data.location;
    
    City.render(data);
  } 
  catch(err) {
    console.log(err);
  }
}

export const WeatherData = async function(evt) {
  try {     
    const {lat, lon} = evt.target.dataset;
    
    const weatherRes = await fetch(`${API_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=${DATA_UNIT}&appid=${KEY}`);
    
    const weatherDataJson = await weatherRes.json();
    
    const result1 = [].concat(weatherDataJson);
    
    Weather.render(result1);
    
  } 
  catch (err) {
    console.log(err);
  }
}
