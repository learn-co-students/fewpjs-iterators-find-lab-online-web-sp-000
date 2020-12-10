const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objArray) {
  let win = objArray.find(object => object.result === "W")
  return !!win ? win.year : undefined
}