const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array){
  let superbowl = array.find(e => e.result === "W")
  
  if (superbowl) {
    return superbowl.year
  }
  
  
}