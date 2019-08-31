const input=require('readline-sync');
const word =require('../element/elementBl');

const fs=require('fs');
var fileData = fs.readFileSync('unorderedlist.txt', 'utf-8' , (err) =>
{
    if(err) throw err;
})

var array=fileData.split(" ");
var number=array.length;
var ll = new word.LinkedList();
for(i=0;i<number;i++)
{
    ll.add(array[i])
}
var inp=input.question("enter the any word");
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