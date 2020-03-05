const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let y = array.find(x => x.result === "W")
  if(y) {
    return y.year
}
}