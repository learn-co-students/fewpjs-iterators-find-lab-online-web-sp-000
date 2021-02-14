const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(array){
  let out = array.find( s => s.result === "W")
  return (out === undefined ? undefined : out.year)

}
