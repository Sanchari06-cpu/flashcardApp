const basket =["pen"+ "apple"+"banna"];
const startingItems = basket.length;
let removedItems = 0;
 while (removedItems !== startingItems){
    const item = basket.pop();
    removedItems++;
    console .log("removed"+ item);
 }
 