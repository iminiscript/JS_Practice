const { VITE_API_URL, VITE_API_KEY } = import.meta.env

export const state = {
    location : {}
}

export const searchCity = async function() {
    try {
        const query =  document.querySelector('.jsSearchInput').value;
        const res = await fetch(`${VITE_API_URL}/geo/1.0/direct?q=${query}&limit=5&appid=${VITE_API_KEY}`);
        if(!res.ok) throw new Error(`${data.message}`)
         state.location = await res.json();
    } catch(err) {
        console.error(err);
        throw new err;
    }
}