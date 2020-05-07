const testVar = {}

function testFunc() {
  return "hi"
}


function isWin(entry) {
	if (entry.result === "W") {
		return entry.year;	
	}
}

function superbowlWin(record) {
	const winner = record.find(isWin);
	if (winner) {
		return winner.year;
	}
};