// function receives 1 argument record
function superbowlWin(record) {
  // object has two properties year and result
  // find grabs first element that satisfies condition
  let recordYear = record.find(function (object) {
    // if condition is met then return, else return undefined
    if (object.result === "W") {
      return object;
    }
  });
  //if win is found, then return win and its year
  if (!!recordYear) {
    return recordYear.year;
    // else return undefinded
  } else {
    return recordYear;
  }
}
