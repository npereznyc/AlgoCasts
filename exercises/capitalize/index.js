// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    //declare an empty array of words
    words=[]
    //split the string by spaces and create an array of the individual words
    arr= str.split(" ")
    //loop over the array
    for (let word of arr) {
        //capitalize the letter at the first index of each word and add it to the sliced off rest of the word to create a capitalized word
       capitalized = word[0].toUpperCase() + word.slice(1)
       //push the capitalized word into the empty array
       words.push(capitalized)
    }
    //join the words in the array with a space to make it a string again
    return words.join(' ')
}

capitalize('a short sentence')

module.exports = capitalize;
