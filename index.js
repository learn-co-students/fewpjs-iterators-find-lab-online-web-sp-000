const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superBowlWin(kansasCityChiefs) {
  return record.find( kansasCityChiefs => kansasCityChiefs === 'W') 
}
