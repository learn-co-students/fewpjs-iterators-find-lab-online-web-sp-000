function superbowlWin(record) {
  const winYear = record.find( record => record.result === 'W');
  if (winYear) {
    return winYear.year
  };
}