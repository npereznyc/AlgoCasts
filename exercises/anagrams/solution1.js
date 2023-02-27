// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const mapA = buildMap(stringA);
    const mapB = buildMap(stringB);

    if (Object.keys(mapA).length !== Object.keys(mapB).length) {
        return false
    }
    //to iterate over an object, use 'let in', rather than 'let of':
    for (let char in mapA) {
        //in this if statement, we're saying, how many times has each character been used in mapA? If it does not match with the number of times the same character has been used in mapB, we return false.
        if(mapA[char] !== mapB[char]) {
            return false;
        } 
    }
    return true;
}

//rather than writing two loops to create the two maps, I can write a helper function:
function buildMap(str) {
    const map = {}
    //we're iterating only over the parts of the string that we want = just characters, no spaces or special characters, all lowercase:
    for(let char of str.replace(/[\W]/g, '').toLowerCase()){
        map[char] = map[char]+1 || 1;
    }
    return map
}


module.exports = anagrams;
