const superbowlWin = s => {
  const result = s.find(record => record.result == "W")
  return result ? result.year : undefined
}