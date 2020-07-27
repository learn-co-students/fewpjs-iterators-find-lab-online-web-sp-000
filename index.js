const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (arr) => {
  let found = arr.find(element => element.result === "W")
  if (found !== -1 && found !== undefined) return found.year;
};