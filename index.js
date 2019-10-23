const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
  let res = arr.find(s => s.result === "W" )
  if (res) {
    return res.year
  } else {
    return undefined
  }
}