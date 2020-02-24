const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let winYear = array.find( e => e.result === "W")
  return (!!winYear ? winYear.year : winYear)
}

