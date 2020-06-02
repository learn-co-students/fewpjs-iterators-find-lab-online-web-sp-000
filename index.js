function superbowlWin(record) {
  const firstWin = record.find(entry => entry.result == "W");
  // if (firstWin == undefined){
  //   return undefined;
  // }else{
  //   return firstWin;
  // }
  return (firstWin == undefined) ? undefined : firstWin.year;
}
