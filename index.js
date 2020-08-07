const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let winRecord = arr.find(r => r.result === "W");
  return winRecord ? winRecord.year : undefined;
}
