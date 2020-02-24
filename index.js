const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let final = array.find(function(object){
    return object.result === "W"
  })

  if (final){
    return final.year
  } else {
    return undefined
  }
}