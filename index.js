const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(arr) {
  let win = arr.find(obj => {
    if (obj.result === "W") return obj
  })

  if (win === undefined) return undefined
  return win.year
}

superbowlWin(record)