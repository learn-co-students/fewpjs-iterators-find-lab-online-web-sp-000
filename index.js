const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(games) {
	let win = games.find(superbowl => superbowl.result === "W")
	return win ? win.year : undefined;
}
