// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // create new string variable = empty string
    // loop over string
    // splice? - take last element from string and push into new string
    let newstr=""
    for (let i = str.length-1; i >= 0; i--) {
        str.slice(str.length-1)
        newstr += str[i]
    }
    return newstr
}

// function reverse(str) {
//     let newstr=""
//     // new for loop syntax if you're iterating over every element:
//     for (let letter of str) {
//         newstr = letter + newstr;
//     }
//     return newstr
// }


reverse('apple')
reverse('hello')
reverse('Greetings!')

module.exports = reverse;
