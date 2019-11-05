const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {

  let winYear = arr.find(element => {
    return element.result === 'W'
  })
  if (winYear) {
    return winYear.year 
  } else {
    return undefined 
  }
}
