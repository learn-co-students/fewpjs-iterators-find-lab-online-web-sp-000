const testVar = {}

function testFunc() {
  return "hi"
}


const superbowlWin = data => {
  const result = data.find(({result}) => result == "W");
  return result && result.year;
}