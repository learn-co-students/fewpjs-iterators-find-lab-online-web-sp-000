const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const match = arr.find(r => r.result === 'W');
  return (!!match) ? match.year : undefined
}
