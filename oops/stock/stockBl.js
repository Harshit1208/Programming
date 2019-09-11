/**
 * @description:Extend the above program to Create InventoryManager to manage the Inventory. The Inventory Manager will use InventoryFactory to create Inventory Object from JSON. The InventoryManager will call each Inventory Object in its list to calculate the Inventory Price and then call the Inventory Object to return the JSON String. The main program will be with InventoryManager
 */
class Stock{
    constructor() {
        this.name=[];
        this.values=[];
    }
    add(name,share,price)
    {
        this.name.push(name)
        this.values.push(share*price)
    }
    total()
    {
        var total=0;
        for(var i=0;i<this.values.length;i++){
            total=total+this.values[i];
        }
        return total;
    }
printStock() 
{
    for(var i=0;i<this.values.length;i++){
        console.log("value of"+this.name[i]+" is "+this.values[i])
    }
}
}
module.exports={Stock}