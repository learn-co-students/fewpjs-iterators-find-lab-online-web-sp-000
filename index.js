function superbowlWin(record) {
  let recordYear = record.find(function (object) {
    if (object.result === "W") {
      return object;
    }
  });

  if (!!recordYear) {
    return recordYear.year;
  } else {
    return recordYear;
  }
}
