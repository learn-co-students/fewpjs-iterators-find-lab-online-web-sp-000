const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let won = arr.find(year => year.result === "W")
  if(!!won) {
    return won.year
  } else {
    return won
  }
}