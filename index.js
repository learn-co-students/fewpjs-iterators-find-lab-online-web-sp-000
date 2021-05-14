const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
    let obj = array.find(o => o.result === 'W');
        if (obj !== undefined) {
        return obj.year
    }
}
