const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (record) => {
  const win = record.find( yearData => yearData.result === "W" );
  if (win) {
    return win.year;
  } else {
    return undefined;
  }
}
