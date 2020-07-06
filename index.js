const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let newArr = arr.find(w => w.result == "W");
  return newArr ? newArr.year : undefined
}
