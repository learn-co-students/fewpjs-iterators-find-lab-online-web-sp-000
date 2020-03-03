const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objectArray){
  let win = objectArray.find(record => {
    return record.result === 'W';
  });

  if(!!win){
    return win.year
  } else {
    return undefined
  }
}