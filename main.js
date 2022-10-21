import './style.scss'
import { showCity, WeatherData } from './controller.js'

// fetch('./data.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

document.querySelector('.jsSearchBtn').addEventListener('click', function(e) {
  e.preventDefault();
  showCity();
});

const list = document.querySelector('.jsList'); 
list.addEventListener('click', WeatherData, true);


