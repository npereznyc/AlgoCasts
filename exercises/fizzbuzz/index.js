// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for (let i=1; i<=n; i++){
        // console.log(i)
        if (i%3===0 && i%5===0) {
            console.log("fizzbuzz")
        } else if (i%3===0) {
            console.log("fizz")
        } else if (i%5===0) {
            console.log("buzz")
        } else {
            console.log(i)
        } 
        }
}

//iterate over numbers
//if number divisible by 3=0, print "fizz"
//if number divisible by 5-0, print "buzz"
//if number divisible by either 3 or 5 = 0, print "fizzbuzz"


fizzBuzz(20)
module.exports = fizzBuzz;
