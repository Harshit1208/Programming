class Node{
    constructor(element){
        this.element = element,
        this.next = null;
    }
    
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size=0;
    }


add(element) 
{ 
// creates a new node 
var node = new Node(element); 

// to store current node 
var current; 

// if list is Empty add the 
// element and make it head 
if (this.head == null) 
    this.head = node; 
else { 
    current = this.head; 

  
    while (current.next) { 
        current = current.next; 
    } 

    // add node 
    current.next = node; 
} 
this.size++; 
} 

removeElement(element) 
{ 
var current = this.head; 
var prev = null; 

// iterate over the list 
while (current != null) { 
    // comparing element with current 
    // element if found then remove the 
    // and return true 
    if (current.element ==element) { 
        if (prev == null) { 
            this.head = current.next; 
        } else { 
            prev.next = current.next; 
        } 
        this.size--; 
        return current.element; 
    } 
    prev = current; 
    current = current.next; 
} 
return -1; 
} 
sort(){
    var current = this.head
     for(current = current.next ; current != null ; current = current.next){
         for(let forward = this.head ; forward != current ; forward = forward.next){
             if(current.element < forward.element){
            var swap = forward.element;
            forward.element = current.element;
            current.element = swap;
             }
         }
     }

}




printList() 
{ 
var curr = this.head; 
var str = ""; 
while (curr) { 
    str += curr.element + " "; 
    curr = curr.next; 
} 
console.log (str); 
}

insertAt(element, index) 
{ 
    if (index > 0 && index > this.size) 
        return false; 
    else { 
        // creates a new node 
        var node = new Node(element); 
        var curr, prev; 
  
        curr = this.head; 
  
        // add the element to the 
        // first index 
        if (index == 0) { 
            node.next = head; 
            this.head = node; 
        } else { 
            curr = this.head; 
            var it = 0; 
  
            // iterate over the list to find 
            // the position to insert 
            while (it < index) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
  
            // adding an element 
            node.next = curr; 
            prev.next = node; 
        } 
        this.size++; 
    } 
} 

// removes an element from the 
// specified location 
removeFrom(index) 
{ 
    if (index > 0 && index > this.size) 
        return -1; 
    else { 
        var curr, prev, it = 0; 
        curr = this.head; 
        prev = curr; 
  
        // deleting first element 
        if (index ==  0) { 
            this.head = curr.next; 
        } else { 
            // iterate over the list to the 
            // position to removce an element 
            while (it < index) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
  
            // remove the element 
            prev.next = curr.next; 
        } 
        this.size--; 
  
        // return the remove element 
        return curr.element; 
    } 
} 

// finds the index of element 
indexOf(element) 
{ 
    var count = 0; 
    var current = this.head; 
  
    // iterae over the list 
    while (current != null) { 
        // compare each element of the list 
        // with given element 
        if (current.element ==  element) 
            return count; 
        count++; 
        current = current.next; 
    } 
  
    // not found 
    return -1; 
} 

// checks the list for empty 
isEmpty() 
{ 
    return this.size == 0; 
} 

// gives the size of the list 
size_of_list() 
{ 
    console.log(this.size); 
} 
printListReturn()
{
    var curr = this.head; 
    var str = ""; 
    while (curr) { 
        str += curr.element + " ";
        curr = curr.next; 
}
return str.trim();
}
} 




 


module.exports={LinkedList}