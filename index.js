const superbowlWin = function(arr) {
  const result = arr.find( obj => obj.result == "W")
  if (result) {
    return result.year;
  }
}