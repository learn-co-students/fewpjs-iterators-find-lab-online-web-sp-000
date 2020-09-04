const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let test;
  test = array.find( obj => obj.result === "W");
  if (test) {
    return test.year;
  } else {
    return undefined;
  }
}