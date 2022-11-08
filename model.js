
export const state = {
    data : {}
}

export const getData = async function() {
    
    try {
        const respons = await fetch('../product.json');
        
        if (!respons.ok) throw new Error();
        state.data = await respons.json();

    } catch (error) {
        console.log(error);
    }
}