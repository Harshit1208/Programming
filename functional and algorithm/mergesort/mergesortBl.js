var test=[15,34,78,18,36,20,43,45]
var mergeSort=(test)=>{

try{

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
}
catch(error)
{
console.log("error");
}
 }
 mergeSort(test);
	
