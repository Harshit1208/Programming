/**
 * @description:bubble sort method for integer
 */
var unlist = [];
// initialized an unordered list.
const input = require("readline-sync");
var bubbleSort = (size) => {
    try{
        for (var i = 0; i <= size - 1; i++) {
            unlist[i] = input.question("Please enter the array elements No" + " " + i + ":");
        }
        console.log("Initial Array:"+ unlist);
    
        for (let x = 0; x < size - 1; x++) {
            for (let y = x + 1; y < size; y++) {
                if (unlist[x] > unlist[y]) {
                    var temp = unlist[x];
                    unlist[x] = unlist[y];
                    unlist[y] = temp;
    
                }
            }
        }
        console.log("Sorted Array:"+ unlist);
    }
    catch(error)
    {
   console.log("error");
    }
    
}
module.exports = { bubbleSort }