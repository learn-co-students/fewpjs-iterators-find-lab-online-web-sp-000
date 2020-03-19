const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  const result = record.find(record => record.result === "W")
  if (result) {
    return result.year  
  } else {
    return result
  }
}