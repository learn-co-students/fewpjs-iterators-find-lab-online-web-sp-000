const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(source) {
  let win = source.find(game => game.result == "W" )
  return !!win ? win.year : win;
}