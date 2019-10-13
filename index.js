const testVar = {}

function testFunc() {
  return "hi"
}

function superBowlWin(gameArray) {
  return gameArray.find(gameObj => gameObj.result === 'W');
}