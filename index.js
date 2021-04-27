// superbowlWin = (record) => {
//   let result = record.find(record => record.result === "W")
//   return !!result ? result.year : undefined
// }

function superbowlWin(record) {
  const yearWon = record.find(({ result }) => result === "W");
  if (yearWon) {
    return yearWon.year
  } else {
    return undefined
  }
}