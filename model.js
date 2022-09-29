import { API_URL, KEY, DATA_UNIT } from './config.js'

export const state = {
    location : {}
}

export const searchCity = async function() {
    try {
        const query =  document.querySelector('.jsSearchInput').value;
        const res = await fetch(`${API_URL}/geo/1.0/direct?q=${query}&limit=5&appid=${KEY}`);

         state.location = await res.json();
        if(!res.ok) throw new Error(`${data.message}`)
        // state.push(data);
        //console.log(state.location);
    } catch(err) {
        console.error(err);
        throw err;
    }
}