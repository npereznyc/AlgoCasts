// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//IN PROGRESS. NOT WORKING YET. HAVE NOT LOOKED AT SOLUTION

function maxChar(str) {
    //iterate over string
    //add characters to new object
    //assign count to each character and increment it by 1 every time it's passed over

    //instantiate empty object
    const chars = {}
    //iterate over string, assigning count to each character and increment it by 1 every time it's passed over
    for (let char of str) {
        chars[char] = chars[char]+1 || 1
    }
    console.log(chars) // { a: 1, b: 1, c: 7, d: 1 }
    const values = Object.values(chars)
    console.log('value1: ', values[0]) // value1:  1
 }

module.exports = maxChar;

maxChar("abcccccccd") === "c"