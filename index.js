const testVar = {}

const record = [
{year: "2018", result: "L"},
{year: "2017", result: "W"},
{year: "2016", result: "N/A"}
]

function testFunc() {
  return "hi"
}

function superbowlWin(objsArray) {
    let wins = objsArray.find( object => object.result === "W" )
    if (wins) { return wins.year }
}



// superbowlWin(record);