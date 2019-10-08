const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let obj = arr.find(data => data.result === "W");
  if (!!obj) {
    return obj.year;
  } else {
    return undefined;
  }
}