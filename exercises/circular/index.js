// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    //slow and fast pointers
    //if next two nodes after fast are defined, enter into loop - iterate fast by 2, slow by 1
    //if not, return false
    //are slow and fast pointing to the same node? if not, keep iterating. if they are, we have a circular linked list, return true
    let slow=list.head
    let fast=list.head

    while(fast.next && fast.next.next){
        slow=slow.next
        fast=fast.next.next
        if(slow === fast){
            return true
        }
    }
    return false
}

module.exports = circular;
