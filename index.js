const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let answer = array.find(m => m.result === "W")
  return answer ? answer.year : undefined
}
