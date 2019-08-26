/**
 * * @description : The function takes the user input and applies merge sort algorithm.
 * @param {params} test: array entered by user 
 */
var mergeSort=(test)=>{


    var n=test.length;
    if(n<2){
        return;
    }
    var mid=n/2;
    var left=[];
    var right=[];
    for(var i=0;i<mid;i++){
        left[i]=test[i];
    }
    for(var i=mid;i<n;i++){
        right[i-mid]=test[i]; // to start from 0
    }
    
    mergeSort(left);
    mergeSort(right);
    merge(left,right,test);
   
}
/**
 * 
 * @param {params} left : one half of array
 * @param {params} right : other half of array
 * @param {params} test 
 */
 var merge=(left,right,test)=>{
     var nl=left.length;
     var rl=right.length;
     var i=0;
     var j=0;
     var k=0;
    while(i<nl&&j<rl){
        if(left[i]>right[j]){
            test[k]=right[j];
            j++;
        }
        else{
            test[k]=left[i];
            i++;
        }
         k++;
    }
    while(i<nl){
        test[k]=left[i];
        i++;
        k++;
    }
    while(j<rl){
        test[k]=right[j];
        j++;
        k++;
    }
    console.log(test);
 }
 

 module.exports={mergeSort};