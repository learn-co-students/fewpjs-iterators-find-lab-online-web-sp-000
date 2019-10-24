const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = function (record) {
  let result = record.find(record => record.result === "W")
  //if result is true return the year else undefined 
  return !!result ? result.year : undefined

}
