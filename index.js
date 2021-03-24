const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const season = array.find(season => season.result === "W");
  if (season) {
    return season.year;
  }
}