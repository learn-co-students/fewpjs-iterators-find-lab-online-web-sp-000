const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let tele = array.find( function(ele){
    return ele.result == "W";
  })
  //debugger
  if(tele != undefined){
    return tele.year
  }
}
