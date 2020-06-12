const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arrayObjects){
    for(let i = 0; i < arrayObjects.length; i++){
      if (Object.values(arrayObjects[i]).find(a => a === "W" )){
      return arrayObjects[i]["year"];
      };
    }
  }
