const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (record) => {
  let lastWinningSeason = record.find(season => season.result === "W")
  if(lastWinningSeason) {
    return lastWinningSeason.year
  }
  else {
    return undefined
  }
}
