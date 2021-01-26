const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let solution = arr.find(ele => ele.result === "W");
  if (solution == undefined) {
    return undefined;
  } else {
    return solution.year;
  }
}
