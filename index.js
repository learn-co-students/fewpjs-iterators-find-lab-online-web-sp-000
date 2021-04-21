
function superbowlWin(objArr){
  let winYears = objArr.filter(x => x.result == "W")
  if (winYears.length == 0){
    return undefined
  }
  else{
    return winYears.map(x => x.year).join(" ")
  }
}
