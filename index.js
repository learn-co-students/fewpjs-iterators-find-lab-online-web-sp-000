function superbowlWin(array) {
  const win = array.find( array => array.result === "W" )
  return !!win ? win.year : undefined
  }
