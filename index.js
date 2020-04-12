const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let win = record.find(game => game.result === "W")
  if(win){
    return win.year
  }
}