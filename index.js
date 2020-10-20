const testVar = {}

function testFunc() {
  return "hi"
}

function win(score) {
  return score.result === "W"
}
function superbowlWin(record) {
  let winningGame = record.find(win);
  return winningGame ? winningGame.year : undefined;
}