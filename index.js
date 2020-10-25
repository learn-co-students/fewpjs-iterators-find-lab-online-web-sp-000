const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = (record) => {
  const winObj = record.find(r => r.result === "W");
  return !!winObj ? winObj.year : undefined;
}
