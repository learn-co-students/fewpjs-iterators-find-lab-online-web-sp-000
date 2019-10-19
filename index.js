

function superbowlWin(record) {

  const result = record.find(({result}) => result === 'W')

  return result.year + ''

}
