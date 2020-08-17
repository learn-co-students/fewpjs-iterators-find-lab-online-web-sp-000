const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let win = arr.find(rec => rec.result === "W");
  return win ? win.year : undefined;
}