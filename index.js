const testVar = {}

function testFunc() {
    return "hi"
}

function superbowlWin(arrOfObj) {
  let result = arrOfObj.find( (obj) => obj.result === "W")
  if (result) {return result.year}
}
