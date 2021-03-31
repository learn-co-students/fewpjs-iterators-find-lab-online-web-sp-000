const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let win = record.find( r => r["result"] === "W" )
  if (win) {
    return win["year"]
  }
}
