const testVar = {}

function superbowlWin (objArray) {
  // return year when win occured or undefined if no win
  let winYear = objArray.find(win => win.result === "W")
  if (winYear) {
    return winYear.year
  } else { 
    undefined
  }
}

// function winner(win) {
//   if (win.result === "W") {
//    value = win.year
//   }
// }
