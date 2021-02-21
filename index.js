const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let result = array.find(win => win.result === "W")
  if (result) {
    return result.year
  }
}
