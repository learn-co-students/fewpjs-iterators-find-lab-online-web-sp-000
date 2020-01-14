function superbowlWin(record) {
  let result = record.find(e => e.result === 'W')
  let x = result ? result.year : undefined
  return x;
}
