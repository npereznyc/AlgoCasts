function pyramid(n, row=0, level='') {
  if(row===n) {
    return
  }
  if(level.length===n+(n-1)){
    console.log(level)
    return pyramid(n, row+1)
  }

  const midpoint=Math.floor((n+(n-1))/2)
  let add;
  if(midpoint - row <= level.length && midpoint + row >= level.length) {
    add='#'
  } else {
    add=' '
  }
  pyramid(n, row, level+add)
}

pyramid(5)

module.exports = pyramid;