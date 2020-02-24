const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let answer = array.find(result => result.result === "W")
  if (answer === undefined) { 
    return answer
  } else {
    return answer.year
  }
}