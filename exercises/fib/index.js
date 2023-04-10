// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3



//write a function that returns the nth element of the fibonacci sequence

//generate the fibonacci series up to number n
    //instantiate an array with 0 and 1
    //iterate from 0 to n
    //push the sum of the last two elements into the array
//return the last element of the array

function fib(n) {
    let fibArr=[0,1]
    for(let i=2; i<=n; i++) {
        fibArr.push(fibArr[i-2]+fibArr[i-1])
    }
    console.log(fibArr)
    return fibArr[n]
}

fib(10)


module.exports = fib;


//write a function that uses recursion to return the nth element of the fibonacci sequence

// function fib(n) {
//     if (n < 2) {
//         return n
//     }
//     return fib(n-1) + fib(n-2)

//     //3+2=5
// }
// fib(4) 
// module.exports = fib;