const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
	let win = arr.find(data => data.result === "W")
	return !!win ? win.year : win
}
