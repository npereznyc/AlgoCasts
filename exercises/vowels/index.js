// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     let vowels= /[aeiou]/gi;
//     console.log(vowels)
//     let result=str.match(vowels)
//     if (!result) {
//         return 0
//     } else {
//         return result.length
//     }
// }

//this solution would have time complexity of O(N*M)
// function vowels(str) {
//     const vowels=['a', 'e', 'i', 'o', 'u']
//     let counter=0
//     for(let char of str.toLowerCase()) {
//         for (let letter of vowels) {
//             if (char===letter){
//                 counter+=1
//             }
//         }
//     } return counter
// }

//alternate iterative solution with just one loop, which also has as a time complexity of O(N*M) because the .includes() method iterates over str:
function vowels(str) {
    const vowelsArray=['a', 'e', 'i', 'o', 'u'] //don't want to use 'vowels', since that is the name of the functiion
    let counter=0
    for(let char of str.toLowerCase()) {
        if(vowelsArray.includes(char))
                counter+=1
            }
    return counter
}


// vowels('Hi There!')
vowels('Why do you ask?')
vowels('Why?')

module.exports = vowels;
