function superbowlWin(arr) {
  let found = arr.find( ({ result }) => result === "W" );
  if (found) {
    return found.year;
  } else {
    return undefined;
  }
}
