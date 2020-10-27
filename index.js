function superbowlWin(record) {
  let result = record.find( r => r.result === "W" );
  return !!result ? result.year : undefined;
}
