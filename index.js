const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let result = arr.find(({result}) => result === "W")
  return !! result ? result.year : undefined
};

console.log(superbowlWin);