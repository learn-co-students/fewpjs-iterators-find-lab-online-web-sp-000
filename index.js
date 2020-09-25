const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let yearOfWin = array.find(r => r.result === "W")
    if (yearOfWin) {
      return yearOfWin.year;
    } else {
      return undefined;
    }
}
