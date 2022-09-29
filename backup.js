import { API_URL, KEY, DATA_UNIT } from './config.js'

export const showCity = async function() {
        const query =  document.querySelector('.jsSearchInput').value;
    try {
       const res = await fetch(`${API_URL}/geo/1.0/direct?q=${query}&limit=5&appid=${KEY}`);

        const data = await res.json();
        if(!res.ok) throw new Error(`${data.message}`)

        const {lat, lon} = data[0];
 
        const list = document.querySelector('.jsList');
        data.map((item) => {
            
        const html = `
       
                <li class="c-listItem jsListItem" data-lat="${item.lat}" data-lon="${item.lon}">  ${item.name} | ${item.country}</li>
          
            ` 
            list.insertAdjacentHTML('afterbegin', html);
            list.classList.remove('hidden');
        });
        let weatherArr = [];
        async function WeatherData(evt) {
            const {lat, lon} = evt.target.dataset;
            
            const weatherRes = await fetch(`${API_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=${DATA_UNIT}&appid=${KEY}`);
            //console.log(weatherRes);
            const weatherDataJson = await weatherRes.json();
            console.log(weatherDataJson);
            let { weatherST } =  weatherDataJson.coord;

            console.log(weatherST);

            const result1 = [].concat(weatherDataJson);
    

            result1.map((weather) => {
                const html = `
                <div class="c-weather">
                <h2 class="c-weatherLoc">${weather.name }| ${weather.sys.country} </h2>
                <div class="c-weatherTop">
                  <h1 class="c-weatherFeel"> ${weather.main.feels_like}<br/><span>Feels Like</span></h1>
                  <div class="c-sun">
                    <span class="c-sunRise">${weather.sys.sunrise}sunrise</span>
                    <span class="c-sunSet">${weather.sys.sunset} Set</span>
                  </div>
                </div>
                <div class="c-weatherInfo">
                  <ul class="c-info">
                    <li class="c-infoItem">
                      <span>Temp:</span>
                      <span>${weather.main.temp}</span>
                    </li>
                    <li class="c-infoItem">
                      <span>Humidity:</span>
                      <span>${weather.main.humidity}</span>
                    </li>
                    <li class="c-infoItem">
                      <span>Pressure:</span>
                      <span>${weather.main.pressure}</span>
                    </li>
                    <li class="c-infoItem">
                      <span>Temp Max:</span>
                      <span>${weather.main.temp_max}</span>
                    </li>
                    <li class="c-infoItem">
                      <span>Temp Min:</span>
                      <span>${weather.main.temp_min}</span>
                    </li>
                    ${weather.main.sea_level ? `<li class="c-infoItem">
                    <span>SEA LEVEL:</span>
                    <span>${weather.main.sea_level}</span>
                  </li>` : '' }
                    
                    <li class="c-infoItem">
                      <span>Temp:</span>
                      <span>${weather.main.temp}</span>
                    </li>
                  </ul>
                </div>
              </div>
                `
                list.insertAdjacentHTML('afterend', html);
            })

        }
        list.addEventListener('click', WeatherData, true);
    } catch (err) {
        console.log(err);
    }
}