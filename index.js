const testVar = {}

function testFunc() {
  return "hi"
}



function superbowlWin(array) {
  const game = array.find((object) => object.result == "W")

  if (game == undefined) {
    return game
  } else {
    return game.year
  }
}
