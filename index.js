const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let win = array.find(x => x.result === 'W');
  win? win = win.year.toString() : win = undefined ;
  return win;
}