const input=require('readline-sync');
const word=require('../wordbinarysearch/wordbinarysearchBl');
// Requiring fs module in which  
// readFile function is defined. 
const fs = require('fs') 
  
fs.readFile('wordbinarysearch.txt', (err, data) => { 
    if (err) throw err; 
    console.log(data.toString());
    var array=(data.toString()).split(" ").sort();
    word.binarysearchstring(array);
  

}) 