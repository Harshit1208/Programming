/**
 * @description:Write a program to read in Stock Names, Number of Share, Share Price. Print a Stock Report with total value of each Stock and the total value of Stock.
 */
class Inventory{ 
    constructor() {
        this.name=[];
        this.values=[];
    }
    add(detail,weight,price)
    {
        this.name.push(detail)
        this.values.push(weight*price)
    }
 
print() 
{
    for(var i=0;i<this.values.length;i++){
        console.log(this.name[i]+"'s"+"Total amount of stock left is"+this.values[i])
    }
}
}
module.exports={Inventory}