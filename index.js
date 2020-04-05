const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  // console.log(array.find( ({ result }) => result === "W"))
  let result = array.find( ({ result }) => result === "W")
  if (!!result) {
    // console.log(result.year)
    return result.year;
  } else {
    return undefined;
  }
}
