/**
 * @description : to print two dimensional array
 */
const input=require('readline-sync');
var dimension=(row,col)=>{
    try{var arr=[];
        for(let i=0;i<row;i++){
            arr.push([]);
            
            for(let j=0;j<col;j++){
                arr[i][j]=input.questionInt('');
            }
    
            }
    console.log(arr);   
        }
         catch(error)
         {
        console.log("error");
         }
         

    }
module.exports={dimension}