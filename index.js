superbowlWin = (array) => {
  let result = array.find( obj => obj.result === "W" )
  return !!result ? result.year : undefined

}