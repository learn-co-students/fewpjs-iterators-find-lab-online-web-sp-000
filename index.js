const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let win = arr.find(e => (e["result"] == "W"))
  if (win) {
    return win.year
  } else {
    win
  }
}