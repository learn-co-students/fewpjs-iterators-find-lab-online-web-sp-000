const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let sb = record.find(game => game.result === "W");
  if (sb) {
    return sb.year;
  } else {
    return undefined;
  }
}