const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = (arr) => {
  let result = arr.find( arr => arr.result === "W" )
  return !!result ? result.year : undefined
}