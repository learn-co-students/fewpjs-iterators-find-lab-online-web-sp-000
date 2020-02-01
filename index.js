const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let result = array.find(element => element.result === "W");
  return ((typeof result === 'undefined') ? undefined : result.year)
}