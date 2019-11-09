const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = arr => {
  let win = arr.find( x => x.result == "W" )
  if( win )
    return win.year
}
