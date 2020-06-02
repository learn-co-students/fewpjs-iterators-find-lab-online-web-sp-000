const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
 let result = arr.find(s => s.result === "W");
 if (result) {
    return result.year;
 } else {
    return result;
 }
}