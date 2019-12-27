const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let ans = arr.find(ans => ans.result === 'W')
  return ans ? ans.year : undefined;
};