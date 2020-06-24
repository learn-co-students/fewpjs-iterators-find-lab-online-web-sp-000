const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let stat = array.find(el => el.result === "W")
  if (!!stat) {
    let year = stat.year
    return year
  }
}