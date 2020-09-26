function superbowlWin(record) {
  function readStats(stat) { return stat.result === "W" ? stat : undefined };
  return record.find(readStats) ? record.find(readStats).year : undefined;
};