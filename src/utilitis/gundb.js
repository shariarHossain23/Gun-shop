const addTodb = (id) =>{
    let shipingGunData = {};
    const storedData = localStorage.getItem("gun-cart");
    if(storedData){
        shipingGunData = JSON.parse(storedData)
    }


    // added data
    const quantity = shipingGunData[id]
    if(quantity){
        const newQuantity = quantity + 1;
        shipingGunData[id] = newQuantity;
    }
    else{
        shipingGunData[id] = 1;
    }
    localStorage.setItem('gun-cart',JSON.stringify(shipingGunData))

}

const getStoreData = () => {
    let shipingGunData = {};
    const storedData = localStorage.getItem("gun-cart");
    if(storedData){
        shipingGunData = JSON.parse(storedData)
    }
    return shipingGunData;
}
 
export { addTodb, getStoreData };

