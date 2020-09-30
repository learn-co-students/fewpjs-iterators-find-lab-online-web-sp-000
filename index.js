const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(superbowls){
  var superbowl = superbowls.find(superbowl => superbowl.result == "W")
   if(superbowl){
    return superbowl.year
   }
}