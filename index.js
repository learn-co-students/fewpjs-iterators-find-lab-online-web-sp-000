const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(stats) {
  const rec = stats.find(k => k.result === "W")
  if (rec) {
    return rec.year;
  } else {
    undefined
  }
};
