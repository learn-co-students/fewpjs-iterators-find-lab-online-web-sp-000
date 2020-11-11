const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
	// { year: "1969", result: "W"},
	let result = records.find(obj => obj.result === 'W')
	return !!result ? result.year : undefined
}
