function superbowlWin(arr) {
  const winGame = arr.find(obj => obj.result === "W") 
  if(!!winGame) {
    return winGame.year 
  } 
}  