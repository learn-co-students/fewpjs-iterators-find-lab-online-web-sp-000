const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const answer = array.find(obj => obj.result === 'W');
  return answer !== undefined ? answer.year : answer;
}