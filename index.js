function superbowlWin(objectsArray) {
  // multiple objects

  let gameWon = objectsArray.find(game => {
    return game.result === "W"
  });
  if (gameWon) {
    return(gameWon.year)
  } else {
    return(undefined)
  };
}
