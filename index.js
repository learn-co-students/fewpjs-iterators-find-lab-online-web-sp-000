const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let year;
  if (array.find( ({ result }) => result === "W")) {
    year = result["year"];
  };
  return year;
}
