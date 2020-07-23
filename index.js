const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(srcArray) {
  let winner = srcArray.find(loser => loser.result === 'W' );
  return !!winner ? winner.year : undefined
}
