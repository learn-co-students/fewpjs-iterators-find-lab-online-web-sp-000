const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const won = arr.find(game => game.result === "W" )
  if (won) { return won.year }
}
