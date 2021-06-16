const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let win = arr.find(obj => (obj.result === "W"))
  return win ? win.year : undefined
}
