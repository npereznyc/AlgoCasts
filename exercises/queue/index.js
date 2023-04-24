// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() { //whenever we create a new instance of a class, if we define a function called construcotr inside of it, that constructor will automatically be called when we create a new instance of the class
        this.data = []//'data' can be anything
    }
    add(record){
        return this.data.unshift(record); //utilizing the unshift method, which is an array method...this will add record to the very start of the array.
    }
    remove(record) {
        return this.data.pop(record)
    }
}
//we're using an array to create a queue. 
module.exports = Queue;
