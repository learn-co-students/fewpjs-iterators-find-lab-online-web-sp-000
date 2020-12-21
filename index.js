const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(wins){
  let win = wins.find(s => s.result === "W");
  if (win){
    return win.year;
  }
}