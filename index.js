const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objArray) {
  let result = objArray.find(element => element.result === "W")
  return !!result ? result.year : undefined
  }