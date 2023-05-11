// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }


function midpoint(list) {
    //two temp variables=slow & fast
    //assign both to head node
    //iterate with while loop - advance slow by 1 and fast by 2
    //after we advance 'fast', check to see if next node and next next are defined....if they do, keep iterating...if not, fast must be at the end of the linked list and slow is at the midpoint.
    let slow =list.head
    let fast=list.head

    while(list.head) {
        if(!fast.next || !fast.next.next){
            return slow 
        } else {
            slow=slow.next
            fast=fast.next.next
        }
    }

}

module.exports = midpoint;
