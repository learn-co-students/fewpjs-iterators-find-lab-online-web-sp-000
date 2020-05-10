const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arrayOfObjects){
  let team = arrayOfObjects.find(teamObj => teamObj.result === "W");
  if (team === undefined) {
    return undefined;
  } else {
    return team.year;
  }
}
