const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(r) {
  let e = r.find(e => e.result === "W")
  return e ? e.year : undefined;
}