const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let winningRecord = arr.find(record => {
    return record.result === "W";
  });
  
  return winningRecord ? winningRecord.year : undefined;
}