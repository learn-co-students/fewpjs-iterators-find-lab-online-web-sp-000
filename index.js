const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let wins = array.find( record => record.result === "W" )
  return wins ? wins.year : undefined
}
