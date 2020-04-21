

const testVar = {}

//  rec = [  .., { year: "1970", result: "N/A"},   { year: "1969", result: "W"} , ... ]
// array of getHashes
//s = { year: "1970", result: "N/A"}

function superbowlWin(rec) {
  let entry = rec.find ( s => s['result'] === "W" );
  return (typeof entry === "object")? entry['year']: undefined
}
