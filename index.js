const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let recordYear = array.find(r => r.result === "W");
  return (recordYear ? recordYear.year : undefined);
}
