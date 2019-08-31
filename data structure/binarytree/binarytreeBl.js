/**
 *  
 * @description : binary tree 
 */
var bst=(num)=>{
    node=fact(2*num)/(fact(num+1)*fact(num))
    return (node);
}
var fact=(n)=>{
    f=1;
    for(i=1; i<=n; i++)  
    {
    f= f*i;
    }
    return f    
}
module.exports={bst}