// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    //iterate over string
    //add characters to new object
    //assign count to each character and increment it by 1 every time it's passed over
    const chars = {}
    for (let char of str) {
        chars[char] = chars[char]+1 || 1
    }
    console.log(chars)
    const keys = Object.keys(chars)
    console.log('value1: ', keys[0])
 }

module.exports = maxChar;

maxChar("abcccccccd") === "c"