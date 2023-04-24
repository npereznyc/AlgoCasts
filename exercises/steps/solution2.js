//this solution uses recursion
//we add a second argument - row=0 - so that we start at the first row
function steps(n, row=0, stair='') {
    //in recursion you always want to establish a 'base case', or a stopping point...the point at which the function knows to stop the recursion process. Establish this FIRST to avoid infinite recursion (like an infinite loop). In this case, it's when row = n.
  if(row===n) {
    return;
  }
   //after checking for the base case, we want to do some kind of work and then call our function again:
  if (n===stair.length) {
    console.log(stair)
    steps(n, row+1)
    return
  }
  if (stair.length<=row){
    stair+= '#'
  } else {
    stair += ' '
  }
  //now we call the function again but we change the argument somehow so we avoid infinite recursion. We want to get us to our base case, so we pass in row as it's new value.
  steps(n, row, stair)

}
steps(4)

module.exports = steps;