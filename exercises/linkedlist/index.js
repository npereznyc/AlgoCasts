// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) { //we're defaulting the value of next to be null, in the event that a next value is not passed in (so we avoid getting 'undefined')
        this.data = data; //taking the data and assigning it to the data property of our node
        this.next = next //assigning the next property of this node
    }
}

class LinkedList {
    constructor() {
        this.head = null; //initializing a head property that is null
    }
    insertFirst(data) {
        const node = new Node(data, this.head); //we don't want to replace any existing head node, we want to insert this node ahead of it (replacing the head node), so we pass this.head as the second argument bc the second argument is the next value, so it reassigns the existing head node to the next value of this new node.
        this.head = node;
        //we can condense this as follows:
        //this.head = new Node(data, this.head)

    }
}

//real usage of linked list:
//const list = new LinkedList();
//list.head = new Node(10)
    //this would create a new linked list with a head node that has 10 as the data value; next would be null.

module.exports = { Node, LinkedList };
