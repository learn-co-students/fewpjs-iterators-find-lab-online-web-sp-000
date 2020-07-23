const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(srcArray) {
  let winner = srcArray.find(loser => loser.result === 'W' );
  if (!!winner) {
    return winner.year
  }
}
