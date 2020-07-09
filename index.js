const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = function(array) {
  const season = array.find(season => season.result === "W") // Use find to search each season for a superbowl win indicated by "W"
  
  if (season){ // If this result is a true value...
    return season.year //... then return the year of that winning season.
  }
}