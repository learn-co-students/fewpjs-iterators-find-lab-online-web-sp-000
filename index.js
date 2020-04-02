const testVar = {}

function testFunc() {
    return "hi"
}

function superbowlWin(array) {
    let result = array.find(e => e.result === "W")
    return result ? result.year : undefined;
}