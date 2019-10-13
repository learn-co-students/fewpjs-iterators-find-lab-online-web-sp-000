const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (results) => {
   let matchedObject = results.find(result => result.result === 'W')
    if(matchedObject){
      return matchedObject.year
    } 
}

