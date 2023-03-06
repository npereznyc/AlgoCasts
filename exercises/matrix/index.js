// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    //instatiating empty array
    const results=[]
    //creating the arrays within the array by pushing in n number of emtpy arrays:
    for(let i=0; i<n; i++){
        results.push([])
    }
    // all fo these values are going to change over time:
    let counter=1;
    let startColumn=0;
    let endColumn=n-1;
    let startRow=0;
    let endRow=n-1;

    while (startColumn <= endColumn && startRow <= endRow) {
        // this for loop is resposible for the top row:
        for(let i=startColumn; i<= endColumn; i++) {
            results[startRow][[i]] = counter;
            counter++
        }
        startRow++;
        //this for loop is responsible for the right column:
        for(let i=startRow; i<=endRow; i++){
            results[i][[endColumn]] = counter;
            counter++
        }
        endColumn--
        //this for loop is responsible for bottom row:
        for(let i=endColumn; i>=startColumn; i--){
            results[endRow][[i]] = counter;
            counter++
        }
        endRow--
        //for loop for start column:
        for(let i=endRow; i>=startRow; i--) {
            results[i][[startColumn]] = counter;
            counter++
        }
        startColumn++
    }
    return results

}

matrix(4)

module.exports = matrix;
