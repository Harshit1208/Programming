/**
 *@description:Create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties name, weight, price per kg
 *@since:09/04/2019
 *@author: Harshit Sethi
 */
const fs=require ('fs');
var json=fs.readFileSync('../inventory/inventory.json');
var data=JSON.parse(json);
for(var i=0;i<data.inventory.length;i++)
{
    console.log(data.inventory[i].Inventorydetail+" "+data.inventory[i].Weight*data.inventory[i].Price);
}
