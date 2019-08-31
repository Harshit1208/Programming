/** 
* @description : Ordered list
* @since : 08/27/2019
* @author : Harshit Sethi
*/
const input=require('readline-sync');
const word =require('../element/elementBl');

const fs=require('fs');
var fileData = fs.readFileSync('orderedlist.txt', 'utf-8' , (err,data) =>
{
    if(err) throw err;
})
var array=[];
var array=fileData.split(" ");
console.log(array);
// array.sort();
var number=array.length;
var arr = []
for(var i=0;i<number;i++){
    arr.push(parseInt(array[i]))
}

console.log(arr);

var ll = new word.LinkedList();
for(i=0;i<number;i++)
{
    ll.add(parseInt(arr[i]));
}
ll.sort();
ll.printList();
var inp=input.question("enter  any no");
var removeindex=ll.indexOf(inp);
if(removeindex!= -1)
{
 console.log("element found");
 ll.removeElement(inp);
 
 var newFile=ll.printListReturn();
 fs.writeFile('read.txt',newFile,(err) =>
 {
     if(err) throw err;
 })
}
else
{
    console.log("element is not there");
    ll.add(inp);
  
    var newFile=ll.printListReturn();
    fs.writeFile('read.txt', newFile,(err) =>
    {
       if(err) throw err;
    })
}

