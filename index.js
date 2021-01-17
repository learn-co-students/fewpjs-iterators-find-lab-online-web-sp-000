const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const firstWin = arr.find(stats => stats.result === "W")
  if (firstWin){
    return firstWin.year
  }
}