// const testVar = {
// }
//
// function testFunc() {
//   return "hi"
// }
//
// const array = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
// ]


function superbowlWin(array){
  let query = array.find(q => q.result === "W");

  if (query != undefined)
    return query.year
  // else
  //   return undefined
}
