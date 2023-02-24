// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    //instantiate empty array
    //iterate over array
    //splice array at the given size
    //push sliced elements into empty array
    newArr=[]
    for(let piece of array) {
        piece = array.splice(0,size)
        newArr.push(piece)
    }
    if(array.length>0) {
        newArr.push(array)
    }
    console.log('newArray: ', newArr)
    return newArr
}
// chunk([1, 2, 3, 4], 2)
// chunk([1, 2, 3, 4, 5], 2)
// chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)

module.exports = chunk;
