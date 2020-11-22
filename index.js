const testVar = {}

function superbowlWin(objects){
  let resObj =  objects.find(object => object["result"] == 'W');
  if (resObj){
    return resObj.year
  } else {
    return undefined
  }
}