const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(array) {
 let answer = array.find(s => s.result === "W")
 return answer ? answer.year : undefined
}