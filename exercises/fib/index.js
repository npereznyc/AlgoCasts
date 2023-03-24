// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//instantiate an array with 0 and 1
//iterate from 0 to n
//push the sum of the last two elements into the array
//return the last element of the array

//write a function that uses recursion to return the nth element of the fibonacci sequence

function fib(n) {
    if (n < 2) {
        return n
    }
    return fib(n-1) + fib(n-2)
}
fib(15) 
module.exports = fib;


// function fib(n) {
//     let fibarr = [0,1]
//     for (let i = 2; i <= n; i++) {
//         fibarr.push(fibarr[i-2] + fibarr[i-1])
//     }
//     // console.log(fibarr)
//     return fibarr[n]
// }
// fib(15) 
// module.exports = fib;
