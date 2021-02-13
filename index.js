function superbowlWin(record) {
  let win = record.find(obj => obj.result === "W");
  return !!win ? win.year : "undefined"
}
