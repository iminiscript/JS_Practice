/**
 * data - Export JSON data after resolving promise.  
 */
export const state = {
    data : {}
}
/**
 * Fetch data from the API. 
 */
export async  function getData() {
    
     try {
        const respons = await fetch('../product1.json');
        console.log(respons)
        //if (!respons.ok) throw new Error();
        state.data = await respons.json();

    } catch (error) {
        console.log(error);
    }
}