const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(stats) {
let rslt;
stats.find(record => {
  record.result == "W" ? rslt = record.year : rslt;
})
return rslt;
}
