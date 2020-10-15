const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(game) {
  let won = game.find(game => game.result === "W")
  return !!won ? won.year : undefined;
}
