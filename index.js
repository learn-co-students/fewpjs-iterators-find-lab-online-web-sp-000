superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}

const testVar = {}

function testFunc() {
  return "hi"
}

