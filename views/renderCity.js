class renderCity {
    
   render(data) {
        this._data = data;
        this._data.location.forEach((item) => {
        const list = document.querySelector('.jsList'); 
        const weather = document.querySelector('.c-weather'); 
        const html = `
            <li class="c-listItem jsListItem" data-lat="${item.lat}" data-lon="${item.lon}">  ${item.name} | ${item.country}</li>` 
            list.insertAdjacentHTML('afterbegin', html);
            list.classList.remove('hidden');
            weather.innerHTML = '';
            weather.classList.add('hidden');
        });
    }
}
export default new renderCity();