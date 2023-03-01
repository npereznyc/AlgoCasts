function capitalize(str) {
    //create a new string and immediately add the capitalized first letter from the input string
    let result = str[0].toUpperCase()
    //we use a regular for loop because we don't want to iterate over the first character
    for (let i=1; i<str.length; i++) {
        //if the character to the left of the index is a space...
        if(str[i-1]=== ' ') {
            //capitalize that character and add it to the reults string
            result += str[i].toUpperCase()
        } else {
            //if the character to the left of the index is not a space, add the character to the reults string
            result += str[i]
        }
    }
    return result
}

capitalize('a short sentence')

module.exports = capitalize;