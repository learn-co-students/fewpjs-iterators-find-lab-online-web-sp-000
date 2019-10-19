

function superbowlWin(record) {

  const result = record.find(({result}) => result === 'W')

  if(!!result){
    console.log('win', result.year)
    return result.year + ''
  }else{
    return undefined
  }

}
