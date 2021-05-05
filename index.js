
  superbowlWin = (arr) => {
  const wins = arr.find(el => el.result === "W")
    return !!wins ? wins.year : undefined 
  }


