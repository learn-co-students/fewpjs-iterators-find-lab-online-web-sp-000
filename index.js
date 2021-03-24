const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let game = array.find(el => el.result === "W")
  if (game) {return game.year}
}