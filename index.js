function superbowlWin(record) {
  let winner = record.find( year => year.result === "W" );
  return (winner ? winner.year : undefined)
}
