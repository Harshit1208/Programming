/** 
* @description : The function takes the user input and applies merge sort algorithm.
* @since : 08/24/2019
* @author : Harshit Sethi
*/

const input=require('readline-sync');
const mergeObj=require('../mergesort/mergesortBl');
var N=input.questionInt("Enter the number of elements in the array: "); 
console.log("Enter array elements: ");

var test=[];

    for (var i=0;i<N;i++){
        test[i]=input.questionInt(" ");
    }
    mergeObj.mergeSort(test);
   