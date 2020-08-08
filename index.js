const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
   let ray = array.find(a => a.result === "W")
   return !!ray ? ray.year : undefined 
}
