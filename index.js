/*
example input array:
  const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]
 */

function superbowlWin(record) {
  // console.log(array.find( ({ result }) => result === "W"))
  let result = record.find( ({ result }) => result === "W")
  return !!result ? result.year : undefined;
    // console.log(result.year)
    return result.year;
}
