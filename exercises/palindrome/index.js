// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    //reverse string - save as new string while maintaning the old string
    //compare new string to old
    let reversed=""
    for (let i = str.length-1; i >= 0; i--) {
        reversed += str[i]
    }
    if (reversed === str){
        return true
    } else {
        return false
    }
}
palindrome("abba")
palindrome("pennep")

module.exports = palindrome;
