/**
 * @description:Stock Account using Linked list, Stack, Queue.
 */
// Node class
class Node { 
    constructor(element) 
    { 
        this.element = element; 
        this.next = null
    } 
} 
//LinkedList
class LinkedList { 
    constructor() 
    { 
        this.head = null; 
        this.size = 0; 
    } 
add(element) 
{ 
    var node = new Node(element); 
    var current; 
    if (this.head == null) 
        this.head = node; 
    else { 
        current = this.head; 
        while (current.next) { 
            current = current.next; 
        } 
        current.next = node; 
    } 
    this.size++; 
} 
insertAt(element, index) 
{ 
    if (index > 0 && index > this.size) 
        return false; 
    else { 
        var node = new Node(element); 
        var curr, prev; 

        curr = this.head; 
        if (index == 0) { 
            node.next = head; 
            this.head = node; 
        } else { 
            curr = this.head; 
            var it = 0; 
            while (it < index) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
            node.next = curr; 
            prev.next = node; 
        } 
        this.size++; 
    } 
} 
removeFrom(index) 
{ 
    if (index > 0 && index > this.size) 
        return -1; 
    else { 
        var curr, prev, it = 0; 
        curr = this.head; 
        prev = curr; 
        if (index == 0) { 
            this.head = curr.next; 
        } else { 
            while (it < index) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
            prev.next = curr.next; 
        } 
        this.size--; 
        return curr.element; 
    } 
} 
elementAtIndex(index) 
{ 
    if (index > 0 && index > this.size) 
        return -1; 
    else { 
        var curr, prev, it = 0; 
        curr = this.head; 
        prev = curr; 
        if (index == 0) { 
            return this.head.element;
        } else {
            while (it < index) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
        } 
        return curr.element; 
    } 
} 
removeElement(element) 
{ 
    var current = this.head; 
    var prev = null; 
    while (current != null) { 
        if (current.element ==  element) { 
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
indexOf(element) 
{ 
    var count = 0; 
    var current = this.head; 
    while (current != null) { 
        if (current.element ==  element) 
            return count; 
        count++; 
        current = current.next; 
    } 
    return -1; 
} 
isEmpty() 
{ 
    return this.size == 0; 
} 
size_of_list() 
{ 
    return this.size; 
} 
printList() 
{ 
    var curr = this.head; 
    var str = ""; 
    while (curr) { 
        str += curr.element + " "; 
        curr = curr.next; 
    } 
    console.log(str); 
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

//StackLinkedList
class Stack { 
    constructor() 
    { 
        this.head = null; 
        this.size = 0; 
    } 

    push(element) 
    { 
    var node = new Node(element); 
    var current;
    if (this.head == null) 
        this.head = node; 
    else { 
        current = this.head; 
        while (current.next) { 
            current = current.next; 
        } 
        current.next = node; 
    } 
    this.size++;        
    } 

    pop() 
    { 
        if(this.size == 0) 
            return "Underflow";
        var index = this.size-1;
        var curr, prev, it = 0; 
        curr = this.head; 
        prev = curr; 
        if (index == 0) { 
            this.head = curr.next; 
        } else { 
            while (it < index) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
            prev.next = curr.next; 
        } 
        this.size--; 
        return curr.element; 
    } 

    peek() 
    { 
        var index = this.size-1;
        var curr, prev, it = 0; 
        curr = this.head; 
        prev = curr; 
        if (index == 0) { 
            return this.head.element; 
        } else { 
            while (it < index) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
            return prev.next.element;
        } 
    }

    isEmpty() 
    { 
    return this.size == 0; 
    } 

    stackSize()
    {
        return this.size; 
    }

    printStack() 
    { 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.element + " "; 
            curr = curr.next; 
        } 
        return str; 
    }

    printStackNoSpace() 
    { 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.element + ""; 
            curr = curr.next; 
        } 
        return str; 
    }
}

//QueueLinkedList
class Queue { 
    constructor() 
    { 
        this.head = null; 
        this.size = 0; 
    } 

    enqueue(element) 
    { 
    var node = new Node(element); 
    var current;
    if (this.head == null) 
        this.head = node; 
    else { 
        current = this.head; 
        while (current.next) { 
            current = current.next; 
        } 
        current.next = node; 
    } 
    this.size++;        
    } 

    dequeue() 
    { 
        if(this.size == 0) 
            return "Underflow";
        var curr;
        curr = this.head; 
        this.head = curr.next; 
        this.size--; 
        return curr.element;  
    } 

    front() 
    { 
        if(this.size == 0) 
            return "No elements in Queue"; 
        return this.head.element; 
    }

    isEmpty()
    {
        return this.size == 0;
    }

    QueueSize()
    {
        return this.size; 
    }

    printQueue() 
    { 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.element + " "; 
            curr = curr.next; 
        } 
        console.log(str); 
    }

    printQueueReturn() 
    { 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.element + " "; 
            curr = curr.next; 
        } 
        return str; 
    }

    printQueueNoSpace() 
    { 
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
            str += curr.element + ""; 
            curr = curr.next; 
        } 
        return str; 
    }
}
module.exports = {LinkedList,Stack,Queue}

