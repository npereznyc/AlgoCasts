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
    //how to get just characters, no spaces or punctuation:

    strA = stringA.replace(/[\W]/g, "").toLowerCase()
    strB = stringB.replace(/[\W]/g, "").toLowerCase()
    // console.log(strA, strB)

    //make object maps to figure out how many times each character appears in each string
    //if length of stringB === length of stringA, loop over stringA and compare key:value pairs to stringB. If they match, we have an anagram.

    //instatiate 1st object:
    const mapA = {}
    //loop over first string and assign values to the characters, incrementing by 1 every time it's looped over:
    for (let char of strA) {
        mapA[char] = mapA[char] + 1 || 1
    }
    console.log('mapA: ', mapA)

    //instantiate 2nd object:
    const mapB = {}
    for (let char of strB) {
        mapB[char] = mapB[char] + 1 || 1
    }
    console.log('mapB: ', mapB)


    // const keysA=Object.keys(mapA)
    // console.log('keysA: ', keysA)

    // const keysB=Object.keys(mapB)
    // console.log('keysB: ', keysB)

    //alphabetize both maps by their keys so that I can compare their values
    const alphabeticalA = Object.keys(mapA).sort().reduce(
        (obj, key) => {
            obj[key] = mapA[key];
            return obj
        }, {})
    console.log('A: ', alphabeticalA)

    const alphabeticalB = Object.keys(mapB).sort().reduce(
        (obj, key) => {
            obj[key] = mapB[key];
            return obj
        }, {})
    console.log('B: ', alphabeticalB)

    if (Object.keys(alphabeticalA).length == Object.keys(alphabeticalB).length) {
        for(let i = 0; i<Object.keys(alphabeticalA).length; i++) {
            // console.log(Object.values(alphabeticalA)[i])
            if (Object.values(alphabeticalA)[i] === Object.values(alphabeticalB)[i]) {
                return true
            } else {
                return false
            }
        }
    } else {
        return false
    }
}

// anagrams('rail safety', 'fairy tales')
anagrams('hello', 'llohe')
// anagrams('Hi there', 'Bye there')
// anagrams('RAIL! SAFETY!', 'fairy tales')
// anagrams('Whoa! Hi!', 'Hi! Whoa!')
// anagrams('One One', 'Two two two')
module.exports = anagrams;
