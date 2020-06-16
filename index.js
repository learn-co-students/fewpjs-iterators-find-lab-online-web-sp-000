const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objects) {
  let win = objects.find(function(obj) {
    return obj.result === 'W';
  });
  let year;
  if (!!win) {
    year = win.year;
  }
  return year;
}