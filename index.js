const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let result = record.find(season => season.result === "W");
  if (result) {
    return result.year;
  } else {
    return result;
  }
}
