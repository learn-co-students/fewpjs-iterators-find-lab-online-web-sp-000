
function superbowlWin(array) {
  const game = array.find( ({result}) => result === 'W')
  if(game) {return game.year}
  //use find to see if result is "w"
  //function returns year the win ocurred
}