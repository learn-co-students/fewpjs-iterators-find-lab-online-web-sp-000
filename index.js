const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arg){
  let res = arg.find(s => s.result === "W")
  if (res) return res.year
}