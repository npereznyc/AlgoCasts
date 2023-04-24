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

// function fib(n) {
//     let fibArr=[0,1]
//     for(let i=2; i<=n; i++) {
//         fibArr.push(fibArr[i-2]+fibArr[i-1])
//     }
//     console.log(fibArr)
//     return fibArr[n]
// }

// fib(10)


// module.exports = fib;


//write a function that uses recursion to return the nth element of the fibonacci sequence

// function fib(n) {
//     if (n < 2) {
//         return n
//     }
//     return fib(n-1) + fib(n-2)
// }

// fib(4) 

// module.exports = fib;


//improve runtime complexity by adding a memoization function:

function memoize(func) {
    const cache = {} // a record of all previous calls to this function and their respective results
    return function(...args) { //this function is going to receive the arguments that are intended for the slowFib function. We use ...args because we don't know how many arguments will be passed to the original function, so we want it to take all the arguments and assign them as an array to this variable called args.
        if(cache[args]) { //have we ever called this function with this particular set of arguments? If so, return that and don't do any more work.
            return cache[args] 
        }
        const result = func.apply(this, args);
        cache[args]= result

        console.log(cache)

        return result

    }
}
function slowFib(n) {
    if (n < 2) {
        return n
    }
    return fib(n-1) + fib(n-2)
}

const fib = memoize(slowFib)

fib(4) 

module.exports = fib;