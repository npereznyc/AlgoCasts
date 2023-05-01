// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

//Stacks are last in, first out.
//Queues are first in, first out.
//In order to use stacks as a queue, we need to use two stacks and move items between them


const Stack = require('./stack');

class Queue {
    constructor() {
        this.first = new Stack()
        this.second = new Stack()
        //creating two stacks whenever we call an instance of this class.
    }
    add(record){ //add method accepts a record (could be called anything)
        this.first.push(record); //push that record into the first stack.

    }
    remove() {
        while (this.first.peek()) { //peek method was created in stack.js; we are calling it here and iterating through all the records in the first stack and as long as there are records reamining...
            const record = this.first.pop() //pop out the last record...
            this.second.push(record) //and push it into the second stack
            //when this while loop is done iterating, that means that every record has been moved into the second stack
        }
        const record = this.second.pop() //saving a reference to the last element that's been added to the second stack
        //not returning anything yet, because first we need to move everything that remains in the second stack back into the first stack...
        while(this.second.peek()){ //now we're moving everything from the second stack back into the first stack
            this.first.push(this.second.pop())
        } //same as what we did in the remove() method above, but in one line instead of 2
        return record; //we return the original last element
    }
    peek(){
        while(this.first.peek()){ //while there are still records in the first stack...
            this.second.push(this.first.pop()) 
        } //take that record, and put it into the second stack
        const record = this.second.peek() //saving a reference to the top record inside the second stack

        while(this.second.peek()){
            this.first.push(this.second.pop()) //moving everything from the second stack back into the first stack
        }
        return record //returning the reference to the second record
    }

}

module.exports = Queue;
