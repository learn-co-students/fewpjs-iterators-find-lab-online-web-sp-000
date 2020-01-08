const testVar = {}

function testFunc() {
  return "hi"
}

 function superbowlWin(record) {
   const x = record.find(entry => entry.result == "W")
   if (x) return x.year
 }
