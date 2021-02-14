const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const r = arr.find(s => s.result === "W");
  if (r) {
    return r.year
  } else {
    return undefined
  }
}
