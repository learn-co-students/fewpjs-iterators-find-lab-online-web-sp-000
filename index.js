const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let yearWon = arr.find( x => x.result === "W")
  if (yearWon) {
    return yearWon.year
  } else {
    return undefined
  }
}
