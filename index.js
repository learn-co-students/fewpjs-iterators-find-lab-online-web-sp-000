const testVar = {}

function testFunc() {
  return "hi"
}

let superbowlWin = function(array) {
  let win = array.find(o => o.result === "W");
  if (!!win == false) {return undefined
  } else {
    return win.year
  }
  
}