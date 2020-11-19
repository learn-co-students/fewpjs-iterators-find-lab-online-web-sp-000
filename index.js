const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(data) {
  let game = data.find(r => r.result === "W");
  if (game) {return game.year};
};
