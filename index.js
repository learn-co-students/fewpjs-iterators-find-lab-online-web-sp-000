const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  const yearWon = record.find(({ result }) => result === "W");
  if(record.find(({ result }) => result === "W")){
    return yearWon.year 
  } else {
    return yearWon
  }
}
