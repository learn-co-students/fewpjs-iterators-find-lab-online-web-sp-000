const testVar = {}

function testFunc() {
  return "hi"
}



superbowlWin = (arr) => {
  let win = arr.find(e => e.result === "W")

  console.log(win)
   if (!!win){
    return win.year
   } 
   
}

console.log(superbowlWin(record))

