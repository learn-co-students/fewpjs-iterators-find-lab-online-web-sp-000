const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let yearRecord = array.find(isWin);
  if (yearRecord) {
    return yearRecord.year
  }
}

function isWin(record) {
  return record.result === "W";
}
