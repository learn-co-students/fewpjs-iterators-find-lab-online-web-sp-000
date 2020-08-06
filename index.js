const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arrayOfResults) {
  const yearWinOccured = arrayOfResults.find(result => result.result === "W");
  if (yearWinOccured ) {
    return yearWinOccured.year;
  } else {
    return undefined;
  }
}