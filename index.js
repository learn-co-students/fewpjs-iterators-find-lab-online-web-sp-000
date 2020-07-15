// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(sourceArray){
  let result = sourceArray.find(e => e.result === "W")
  if (result === undefined){
    return result
  } else {
    return result.year
  }
}
