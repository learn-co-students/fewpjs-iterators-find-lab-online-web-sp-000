const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(record) {
  let win = record.find(entry => entry.result === "W");
  let answer = win ? win.year : win;
  return answer
}
