function superbowlWin(array) {
  let x = array.find( function(e) {return e.result === "W"})
  if(x) {return x.year}
}
