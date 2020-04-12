function superbowlWin(record) {
  let result = record.find( o => o.result === "W")
  return !!result ? result.year : undefined
}
