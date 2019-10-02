const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const record = array.find(record => {
    return record.result === "W"
  })
  return record ? record.year : undefined
}
