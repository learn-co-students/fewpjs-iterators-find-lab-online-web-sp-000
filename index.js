const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const record = arr.find(obj => obj.result == 'W'); 
  return(record ? record.year : undefined);
}


