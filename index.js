const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(record){
 
let a = record.find(function(e){
  return e.result !== 'N/A' && e.year ==='1969'
  })
  if (a){
    return a.year
  }else{
    return a
  }
}