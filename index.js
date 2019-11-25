const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let game = arr.find(game => game.result === "W" );
  if(game) { return game.year };
}
