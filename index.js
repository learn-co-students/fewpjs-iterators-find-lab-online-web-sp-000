const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  const win = record.find(entry => entry.result == 'W')
  if (win) return win.year
}
