
function superbowlWin(arr) {
let result = arr.find(s => s.result === "W")
return !!result ? result.year : undefined
}