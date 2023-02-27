function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
    return str.replace(/[\W]/g, '').toLowerCase().split('').sort().join('')
    //we call replace to replace all non-characters with an empty string(''). Then we lowercase it all. Then we split it to turn it into an array. Then we sort it, which will alphabetize. Then we join it to turn it back into a string.
}

module.exports = anagrams;
