const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objArray) {
  let win = objArray.find(object => object.result === "W")
  if(win) {
    return win.year
  } else {
    return undefined
  }
}