const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let hashYearWon = array.find(hash => hash.result === "W");

  if (hashYearWon != undefined) {
    return hashYearWon.year
  } else {
    return undefined
  }

}
