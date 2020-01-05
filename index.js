const testVar = {}

function testFunc() {
  return "hi"
}

// function superbowlWin(record) {
//   let result = record.find(record => {
//       if (record.result === "W"){
//         return record.year;
//       } else {
//         return "1969";
//       }
//   })
// }

function superbowlWin(record) {
  let result = record.find(e => e.result === "W")
  return result ? result.year : undefined
}
