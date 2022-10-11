class renderWeather {
    
    render(weather) {
        this._data = weather;
        this._data.forEach((weather) => {
        const list = document.querySelector('.jsList');  
        const html = `
            <div class="c-weather">
                <h2 class="c-weatherLoc">${weather.name }| ${weather.sys.country} </h2>
                <div class="c-weatherTop">
                <h1 class="c-weatherFeel"> ${weather.main.feels_like}<br/><span>Feels Like</span></h1>
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
            </div>` 
            list.insertAdjacentHTML('afterend', html);
            list.innerHTML = ''
            list.classList.add('hidden');
        });
    }
}
export default new renderWeather();