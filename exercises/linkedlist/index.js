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

    size() {
        let counter = 0; //this variable will increment to count the number of nodes.
        let node = this.head; //getting a reference to the first node inside the linked list

        while (node) { //when we first enter the while loop, if the linked list does not have a head node assigned to it, then the while loop will check to see if node is a truthy or falsy value. If this.head does not exist, then the while loop will fail and won't run.
            //if there is a head node, then the loop will run
            counter++; //increment the counter by 1 bc we just found one node.
            node = node.next; //reassign 'node' to the next property of the current node. Eventually node = null when we reach the tail and the loop will stop running.
        }
        return counter
    }

    getFirst() {
        return this.head
    }

    getLast() {
        //accounting for the scenario where there are no nodes in the list:
        if (!this.head) {
            return null
        }

        let node = this.head //reference to the first node in the list
        // console.log(node)
        while (node) {
            if (!node.next) {
                return node; //if node.next is null, return the node because it is the tail
            }
            node = node.next; //otherwise, update the node to the node.next value
        }
    }

    clear() {
        this.head = null; //the linked list only knows that there are nodes because it's head has a value. If we make the head null, then there is effectively no list.
    }

    removeFirst() {
        if (!this.head) {
            return
        }
        this.head = this.head.next //we want the head to point to the second node in the list, effectively removing the first node. If there is no second node, then we're reassigning this.head to null, which is also what we're looking for.
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null
            return;
        }

        let previous = this.head //assigning the head to the varaible previous
        let current = this.head.next //assigning the net node to the value current

        while (current.next) { //this loop will run as long as current.next is not null
            previous = current //previous is reassinged to the current node
            current = current.next //the current node is reassigned to the next node
        }
        previous.next = null //when the while loop is done running, we will have reached the end of the list, so we assign previous.next to null, which eliminates the current node(the last node)
    }

    insertLast(data) {
        //called with a Data argument.
        //create a new node, stick Data into that node, and then insert that into the very end of the list
        // get a reference to the current last node...the current last node's next property points to the new node - can use getLast() method
        //handle the case where the list is empty (there is no last node)...in this case, the head property needs to point to the new node
        const node = new Node(data)
        if (!this.head) {
            this.head = node
        } else {
          const lastNode = this.getLast()
          lastNode.next = node  
        }
        
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }
        return null;
    }

   

    removeAt(index) {
        //account for an empty list:
        if (!this.head) {
            return;
        }
        //account for trying to remove first node:
        if (index === 0) {
            this.head = this.head.next
            return;
        }
        //use getAt to get the node previous to the one we're looking for
        const previous = this.getAt(index - 1)
        
        //account for an index that's beyond the length of the list:
        if(!previous || !previous.next){
            return;
        }
        //reassign 'next' of the previous node to the node following the one we're looking for, effecitvley removing that node from the list 
        previous.next = this.getAt(index + 1)

    }

    insertAt(data, index){
        //account for instance where list is empty
        //account for instance where provided index is out of bounds (insert new node at end) - if index is greater than list length, add to end
        //can use getAt to get a reference to the previous node in a chain (index-1)
        //create new node
        //make previous point to new node
        //new node points to the old following node

        // const node = new Node(data)
        // const previous= this.getAt(index-1)
        // if (!this.head){
        //     this.head=node
        //     return;
        // } else if(index>=this.size()){
        //     this.insertLast(data)
        //     return;
        // } else if (index === 0) {
        //     this.insertFirst(data)
        //     return;
        // } else {
        //     node.next=this.head.next.next
        //     previous.next=node
        // }

        //alternative solution:
        if(!this.head){
            this.head=new Node(data)
            return;
        }
        if(index ===0){
            this.head = new Node(data, this.head)
            return;
        }
        const previous = this.getAt(index-1) || this.getLast()
        const node = new Node(data, previous.next)
        previous.next= node;

    }


}

//real usage of linked list:
// const list = new LinkedList();
// list.head = new Node('a')
// list.insertFirst('b');
// list.insertFirst('c');
// list.insertFirst('d');
// console.log(list.removeLast())

// const list = new LinkedList(10)
//this would create a new linked list with a head node that has 10 as the data value; next would be null.

module.exports = { Node, LinkedList };
