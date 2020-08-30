const testVar = {};

function testFunc() {
  return "hi";
}

function isWin(season) {
  return season.result === "W";
}
function superbowlWin(array) {
  const season = array.find(isWin);
  if (season) {
    return season.year;
  }
}
