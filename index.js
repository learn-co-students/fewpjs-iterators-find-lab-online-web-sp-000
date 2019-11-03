const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
  const win = records.find(record => record.result === "W");
  if (win) {
    return win.year;
  } else {
    return undefined;
  }
}