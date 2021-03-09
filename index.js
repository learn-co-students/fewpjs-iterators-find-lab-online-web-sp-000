const testVar = {}

function testFunc() {
  return "hi"
}


 function superbowlWin(array){
  if(array.find(o => o.result === 'W') === undefined){
    return undefined
  }else{
    return array.find(o => o.result === 'W').year

  }

}