const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(object){
  const element = object.find(({ result }) => result === 'W')
  return (element ? element.year : undefined);
}
