// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    str=n.toString() //turn integer into string
    reverse = ''
    for(let i = str.length-1; i>=0; i--) {
        reverse += str[i]
    }
    return parseInt(reverse) * Math.sign(n)
    //Math.sign allows us to get rid of the if statement
    if(n < 0) {
        return parseInt(reverse) * -1;
    } else if (n===0) {
        return 0
    } else {
        return parseInt(reverse)
    }
}
reverseInt(5)

// turn integer into string (tostring)
// reverse string
// turn string back into integer (parseint)
// conditional to check if positive or negative?
//parseint - turns a string into an integer
//tostring - turns an input into a string
//math.sign - returns a 1 if the input is a positive integer. returns -1 if the input is a negative integer

// function reverseInt(n) {
//     const reversed=n.toString().split('').reverse().join('');
//     console.log(parseInt(reversed))
// }
// reverseInt(-5)

module.exports = reverseInt;
