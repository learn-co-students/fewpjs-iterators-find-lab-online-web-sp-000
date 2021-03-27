const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = (record) => {
  let result = record.find(data => data.result === 'W' )
  if (result) {
    return result.year
  } else {
    return undefined
  }
}