//const testVar = {}

//function testFunc() {
  //return "hi"
//}


superbowlWin = (record) => {
  let won = record.find( record => record.result === "W" )
  return !!won ? won.year : undefined
}

//function superbowlWin(year){
  //let won = record.find(win=> win.result==="W")
  //let result = won.year===year ? year : undefined
  //return result 
//}

//let yearResult = "1923"

//let won = record.find(win=> win.result==="W")

//won.year==yearResult ? year : "undefined"

  //if (won.year===yearResult){
    //return yearResult}
  

 // won.year===yearResult



  

  





function spy(year){
  let won = record.find(win=> win.result="W")
  if (won)
  return `${year}`
  else
     return 'undefined'
}
  //const superBowl = record.find(function(win){
    //return win.result="W"})

   // const superBowl = record.find(function(win){
     // if (win.result==="W")
      //return win.year

      //else 
      //win.year=="undefined"})