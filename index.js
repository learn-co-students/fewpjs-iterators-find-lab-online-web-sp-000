const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let winner = array.find( game => game.result === "W" )
  if (winner) {
    return winner.year
  }
}