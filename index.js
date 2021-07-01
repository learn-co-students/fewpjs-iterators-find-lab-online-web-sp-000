const testVar = {}

function testFunc() {
  return "hi"
}

// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
// ]

function superbowlWin(record) {
  let hasWon = record.find(obj => obj.result === "W"); 
  // returns a year the KC Chiefs won the superbowl
  // returns undefined if the record has no win objects
  return (!!hasWon ? hasWon.year : hasWon)
}