const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record) {
  const year = record.find(e => e.result === "W")
  if (typeof year === "object") {
    return year.year
  } else {
    return undefined
  }
}