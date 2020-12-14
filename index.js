const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  let obj = array.find(o => o.result === "W")
  if(obj) {
    return obj.year
  }
  else {
    return undefined
  } 
}
