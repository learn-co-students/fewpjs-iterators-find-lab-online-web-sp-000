const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
  let t = arr.find(team => team.result === "W" )
 
  if (!!t){
    return t.year
  }
  else {
    return undefined
  }
}


