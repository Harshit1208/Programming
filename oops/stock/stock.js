/**
 *@description:Extend the above program to Create InventoryManager to manage the Inventory. The Inventory Manager will use InventoryFactory to create Inventory Object from JSON. The InventoryManager will call each Inventory Object in its list to calculate the Inventory Price and then call the Inventory Object to return the JSON String. The main program will be with InventoryManager
 *@since:09/05/2019
 *@author: Harshit Sethi
 */
const input=require('readline-sync');
const obj=require('../stock/stockBl');
var stock=new obj.Stock();
var num=input.question('Enter the num of share');
for(i=0;i<num;i++)
{
    console.log("for"+(i+1));
    var name=input.question('Enter the name of share');
    var share=input.question('Enter the quantity of share you have');
    var price=input.question('Enter the price of share you have');
    stock.add(name,share,price)
}
console.log("----------------");
stock.printStock();
console.log("total value of shares="+stock.total())