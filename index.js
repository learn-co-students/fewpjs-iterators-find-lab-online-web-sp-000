const testVar = {}

function superbowlWin(array) {
  let value = array.find(obj => obj.result === "W")
  return !!value ? value.year : undefined
}
