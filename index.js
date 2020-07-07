const testVar = {}

function testFunc () {
  return 'hi'
}

const superbowlWin = arr => {
  const win = arr.find(o => o.result === 'W')
  let r
  win ? (r = win.year) : r
  return r
}
