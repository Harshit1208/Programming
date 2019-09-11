/**
 *@description:Write a program to read in Stock Names, Number of Share, Share Price. Print a Stock Report with total value of each Stock and the total value of Stock.
 *@since:09/05/2019
 *@author: Harshit Sethi
 */
const input=require('readline-sync');
const obj=require('../invmanprogram/invmanprogramBl');
var im=new obj.Inventory();
var num=input.question('Enter the num of items in inventory');
for(i=0;i<num;i++)
{
    var detail=input.question('Enter the detail of inventory');
    var weight=input.question('Enter the weight of material in kgs');
    var price=input.question('Enter the price of material');
    im.add(detail,weight,price)
}
im.print();
