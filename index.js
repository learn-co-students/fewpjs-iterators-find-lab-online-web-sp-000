const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let win = arr.find(e => (e.result === "W"))
  return win ? win.year : undefined
}
