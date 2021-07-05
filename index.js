let record = [{year: "2018", result: "L"}, {year: "2019", result: "L"}, {year: "2020", result: "W"}]

function superbowlWin(record) {
  let result = record.find(record => record.result === "W")
  return !!result ? result.year : undefined
}
