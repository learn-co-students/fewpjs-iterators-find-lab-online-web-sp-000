const testVar = {}

function testFunc() {
  return "hi"
}
// arr.find(callback(element[, index[, array]])[, thisArg]) 

function superbowlWin(arr) {
  let result = arr.find( e => e.result === 'W' ); 
  return  !!result ? result.year : undefined
  
}
