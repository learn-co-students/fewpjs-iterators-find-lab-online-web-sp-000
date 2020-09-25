const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let searchResult = array.find(res => res.result === "W")
  if (searchResult) {
    return searchResult.year
  } else {
    return undefined
  }
}