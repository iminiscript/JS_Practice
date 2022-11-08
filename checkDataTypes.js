class DataTypes {
    constructor(value) {
        this.value = value;
    }
    
	checkData (data) {

      	const type = sessionStorage.getItem("type");
        const typeOne = data.data.step1View0Items;
        const typeTwo = data.data.step1View1Items;

        if (type === 'pouch') {
            this.value = typeOne;
          } else if( type === 'travelPacks') {
            this.value = typeTwo;
          }
         
        return this.value;
    }
}

export default new DataTypes();