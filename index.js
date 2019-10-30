const testVar = {}

function testFunc() {
  return "hi"
}

// Pseudo Code

// function superBowlWin(arrayOfObjects) {
//    map through each object inside of the array
//    find the object with the result property that matches "W"
//    return the year
// }

// 1st Attempt
// const superBowlWin = (arrOfObjs) => {
//    return arrOfObjs.map(obj => {
//       return obj.find(o => {
//          if (o.result === "W") {
//             return o.year;
//          } else {
//             return undefined;
//          }
//       });
//    });
// }

// 2nd Attempt
// function superBowlWin(arrOfObjs) {
//    return arrOfObjs.find(obj => {
//       if (obj.result === "W") {
//          return `${obj.year}`;
//       }
//       return undefined;
//    });
// }

// 3rd Attempt
// function superBowlWin(arrOfObjs) {
//    let object = arrOfObjs.find(obj => obj.result === "W");
//
//    if (object) {
//       return object.year;
//    } else {
//       return undefined;
//    }
// }

// Explaining the Solution

superbowlWin = (record) => {

  // store the object that results in a "W" inside of the result variable
  let result = record.find( rec => rec.result === "W" )

  // if result is true, return the year of the stored variable
  // if not, return undefined
  return !!result ? result.year : undefined
}
