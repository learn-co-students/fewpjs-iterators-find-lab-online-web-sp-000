const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  if (record.find(r => r.result == "W" )) {
    return record.find(r => r.result == "W" ).year
  } else {
    return undefined
  }
  
} 

