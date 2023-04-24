// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//regexp solution. Unsure of time complexity 
// function vowels(str) {
//     let vowels= /[aeiou]/gi;
//     console.log(vowels)
//     let result=str.match(vowels)
    //.match will return null if no matches are found, so the conditional is necessary:

//     if (!result) {
//         return 0
//     } else {
//         return result.length
//     }
// }

//more condensed way to write this regexp version:
// function vowels(str) {
//     let result=str.match(/[aeiou]/gi);
//     //.match will return null if no matches are found, so the conditional is necessary:
//     return result ? result.length : 0
// }


//iterative solution. this solution would have time complexity of O(N*M)
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

//alternate solution using a hashmap, which has a time complexity of O(N) and is more efficient:
// function vowels(str) {
//     //check for edge cases:
//     if(!str || str.length === 0) return 0

//     //static key-value object map
//     const vowelMap={
//         a:1,
//         e:1,
//         i:1,
//         o:1,
//         u:1
//     }
//     let counter=0
//     //loop over str and add 1 if the current character exists in vowelMap OR add 0 if it does not exist:
//     for(let char of str.toLowerCase()) {
//         counter += vowelMap[char] || 0;
//             }
//     return counter
// }


// vowels('Hi There!')
vowels('Why do you ask?')
vowels('Why?')

module.exports = vowels;
