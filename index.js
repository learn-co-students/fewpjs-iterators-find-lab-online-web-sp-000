const testVar = {}

function testFunc() {
  return "hi"
}


console.log("hiiii")



function superbowlWin(arrayOfObjects) {
  let result = arrayOfObjects.find( function(object) { return object.result === "W"});
  if (result) {
    return result.year
  } else {
    return result
  }
}