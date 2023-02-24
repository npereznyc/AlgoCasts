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
    newArray=[]
    for(chunk of array) {
        chunk = array.splice(0,size)
        newArray.push(chunk)
    }
    console.log(newArray)
}
// chunk([1, 2, 3, 4], 2)
chunk([1, 2, 3, 4, 5], 2)

module.exports = chunk;
