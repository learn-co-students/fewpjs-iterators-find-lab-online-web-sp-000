const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arrayOfObjects) {
  const win = arrayOfObjects.find(o => o.result === "W")
  if (win != undefined) {
    return win.year
  } else {
    return undefined
  }
}