const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let boobs = record.find(record => record.result ==='W')
  return !!boobs ? boobs.year : undefined;
}