const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let result = array.find(o => o.result === "W")
  console.log(result)
  return (result ? result.year : undefined)
}