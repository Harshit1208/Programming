c/**
 * @description : Stack
 */
class Stack { 
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 
  
    push(element) {
        this.items.push(element);
    } 
    pop(){
        if (this.items.length == 0) 
        return "Underflow"; 
    return this.items.pop(); 
    }
    printStack(){
        var str = ""; 
        for (var i = 0; i < this.items.length; i++) 
        str += this.items[i] + " "; 
        return str; 
    }
    isEmpty() 
{ 
    // return true if stack is empty 
    return this.items.length == 0; 
} 
}
var stack = new Stack();
var stack
var str=[]
var count=0;
var count1=0;
var str1=' ( 5 + 6 )  ∗ ( 7 + 8 ) / ( 4 + 3 ) ( 5 + 6 ) ∗ ( 7 + 8 ) / ( 4 + 3 ) ';
var str2=str1.trim()
 str=str2.split(" ");
 console.log(str);
for(i=0;i<str.length;i++){
    if(str[i]=='('){
        stack.push(1)
    }
    else if(str[i]==')'){
        // if(stack.isEmpty){
        //     console.log("unbalanced");
        //     break;
        // }
       stack.pop()
    }
    else{
        console.log(str[i]);
    }  
}


var x=stack.isEmpty();
if(x==true){
    console.log("balanced")
}
else{
    console.log("unbalanced")
}
module.exports={Stack}