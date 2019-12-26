const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (objArr) => {
  const results = objArr.find(x => x.result ==="W")
  
 return results ? results.year : undefined

}