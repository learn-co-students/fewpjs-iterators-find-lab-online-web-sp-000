const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let found = array.find((game) => game.result === "W")
  if (found){return found.year}
  }
