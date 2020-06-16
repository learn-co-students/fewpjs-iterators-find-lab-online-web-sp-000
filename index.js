const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  const found = record.find(w => w.result === "W");
  if (found) {
    return found.year
  } else {
  return undefined
  }
}