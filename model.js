/**
 * data - Export JSON data after resolving promise.  
 */
export const state = {
    data : {}
}
/**
 * Fetch data from the API. 
 */
export const getData = async function() {
    
    try {
        const respons = await fetch('../product.json');
        
        if (!respons.ok) throw new Error();
        state.data = await respons.json();

    } catch (error) {
        console.log(error);
    }
}