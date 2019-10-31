superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  // result === found object
  return !!result ? result.year : undefined
}
