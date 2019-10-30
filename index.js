const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(data) {
 let foundWin = data.find(({result}) => result === "W");
  if (!!foundWin){
    return foundWin.year
  } else {
    return undefined
  }
  

}