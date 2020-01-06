const testVar = {}

function testFunc() {
  return "hi"
}

// function find(source, fn) {
//   for(let i=0; i<source.length; i++) {
//     if (fn(source[i]) === true) {
//       return source[i]
//     }
//   }
//   return undefined;
// }

function superbowlWin(record) {
  let result = record.find(record => {
    if (record.result === "W"){
      return true;
    } else {
      return false;
    }
  })
  if (result === undefined) {
    return undefined;
  }
  return result.year;
}

// function superbowlWin(record) {
// }
